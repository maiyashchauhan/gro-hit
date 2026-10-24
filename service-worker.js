const CACHE = 'grohit-cache-v4';
const ASSETS = [
  '/',
  '/index.html',
  '/schemes.html',
  '/gramconnect.html',
  '/pardesh-setu.html',
  '/report.html',
  '/announcements.html',
  '/crop.html',
  '/mandi.html',
  '/jobs.html',
  '/radio.html',
  '/donation.html',
  '/suggestion.html',
  '/admin.html',
  '/login.html',
  '/create.html',
  '/register.html',
  '/ragister.html',
  '/save.html',
  '/offline.html',
  '/styles.css',
  '/app.js',
  '/i18n.js',
  '/ai-assistant.js',
  '/gramconnect.js',
  '/pardesh-setu.js',
  '/manifest.json',
  '/logo.png',
  '/logo.png.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(cacheFirst(req));
  }
});

async function networkFirst(req) {
  try {
    const res = await fetch(req);
    const cache = await caches.open(CACHE);
    cache.put(req, res.clone());
    return res;
  } catch {
    return (await caches.match(req)) || (await caches.match('/offline.html'));
  }
}

async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    const cache = await caches.open(CACHE);
    cache.put(req, res.clone());
    return res;
  } catch {
    return req.destination === 'document' ? caches.match('/offline.html') : null;
  }
}

// Background sync
self.addEventListener('sync', event => {
  if (event.tag === 'grohit-sync') {
    event.waitUntil(handleSync());
  }
});

async function handleSync() {
  try {
    const db = await openDB();
    const tx = db.transaction('queue', 'readwrite');
    const store = tx.objectStore('queue');
    const all = await store.getAll();
    for (const item of all) {
      try {
        const res = await fetch('/submit', {
          method: 'POST',
          headers: { 'Content-Type':'application/json' },
          body: JSON.stringify(item)
        });
        const json = await res.json();
        if (json && json.success) {
          await store.delete(item.id);
        }
      } catch (err) {
        console.warn('Sync failed for item', item.id, err);
      }
    }
    await tx.done;
  } catch (e) {
    console.warn('Sync error', e);
  }
}

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('grohit-db', 2);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('queue')) {
        db.createObjectStore('queue', { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
