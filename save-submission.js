// save-submission.js - Safe background sync helper
(function(){
  window.GroHitSync = {
    async sendToServer(entry) {
      try {
        const outbox = JSON.parse(localStorage.getItem('outbox') || '[]');
        outbox.unshift(entry);
        localStorage.setItem('outbox', JSON.stringify(outbox));

        const res = await fetch('/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry)
        });
        const json = await res.json();
        if (json && json.success) {
          entry.status = 'sent';
          localStorage.setItem('outbox', JSON.stringify(outbox));
        }
      } catch (err) {
        console.log('Background sync queue saved locally');
      }
    }
  };
})();
