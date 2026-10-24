# 🌾 Gro-Hit Rural Support Platform v2.0

**A complete, rural-first full-stack PWA for Indian village communities** — powered by Google Gemini AI, 23 languages (all 22 scheduled Indian languages + English), DBT Traffic Light validation, and voice-assisted navigation.

---

## 🚀 Quick Start

### 1. Start the Backend
```bash
# Double-click this file or run from terminal:
start-backend.bat

# OR manually:
cd backend
node server.js
```

Backend runs at: `http://localhost:5000` (APIs at `http://localhost:5000/api`)

### 2. Open the Frontend
Open `index.html` in your browser (or serve via any local HTTP server / Live Server).

---

## 🔑 Add Gemini API Key (for full AI)

1. Get free key from: https://aistudio.google.com/app/apikey
2. Edit `backend/.env`:
   ```
   GEMINI_API_KEY=your_actual_key_here
   ```
3. Restart the backend

> **Without API key**: AI features still work with smart fallbacks + official helpline numbers (1800-180-1551, 108, 104, 112, 155261).

---

## 🏗️ Architecture

```
gro-hit/
├── index.html              ← Home portal & quick services
├── schemes.html            ← Govt schemes + DBT Traffic Light + AI Matcher
├── gramconnect.html        ← GramConnect: Public project & budget transparency tracker
├── pardesh-setu.html       ← Pardesh Setu: Remote elder care & migrant family bridge
├── crop.html               ← Gemini AI crop disease scanner & offline queue
├── mandi.html              ← Live daily market commodity rates
├── report.html             ← Village grievance reporting (photo + GPS)
├── announcements.html      ← Panchayat & Health Worker official bulletins
├── admin.html              ← Panchayat administration console
├── jobs.html               ← Rural employment board & PMKVY schemes
├── radio.html              ← Community radio & oral story archives
├── donation.html           ← Village mutual aid & micro-donations
├── suggestion.html         ← Village development suggestion box
├── save.html               ← Registered citizen records & CSV export
├── sos.html                ← One-tap emergency SOS & GPS dispatch
├── login.html              ← Multi-role authentication & switch role
├── create.html             ← Village digital ID generator
├── register.html           ← Digital ID card success screen
├── offline.html            ← Offline cached data viewer
├── i18n.js                 ← 23 languages translation engine & modal switcher
├── ai-assistant.js         ← Floating AI chat widget (3-tier resilience)
├── pardesh-setu.js         ← Pardesh Setu client logic, state & AI voice assistant
├── gramconnect.js          ← GramConnect transparency ledger & citizen audit logic
├── app.js                  ← Global application state & data stores
├── styles.css              ← Rural-first high-contrast CSS design system
└── backend/
    ├── server.js           ← Express server (port 5000)
    ├── routes/
    │   ├── ai.js           ← Gemini AI endpoints
    │   ├── dbt.js          ← DBT Traffic Light API
    │   ├── issues.js       ← Grievance CRUD & tracking
    │   ├── announcements.js← Official updates API
    │   ├── mandi.js        ← Daily market commodity pricing
    │   ├── jobs.js         ← Rural employment listings
    │   ├── schemes.js      ← Welfare scheme matching algorithm
    │   └── auth.js         ← Phone OTP login + JWT session
    ├── models/             ← MongoDB schemas
    └── .env                ← Configuration & Gemini API key
```

---

## 🌐 23 Languages Supported (All 22 Scheduled Indian Languages + English)

| Language | Code | Native Script |
|----------|------|---------------|
| Hindi | `hi` | हिन्दी |
| Bengali | `bn` | বাংলা |
| Telugu | `te` | తెలుగు |
| Marathi | `mr` | मराठी |
| Tamil | `ta` | தமிழ் |
| Urdu | `ur` | اردو |
| Gujarati | `gu` | ગુજરાતી |
| Kannada | `kn` | ಕನ್ನಡ |
| Malayalam | `ml` | മലയാളം |
| Odia | `or` | ଓଡ଼ିଆ |
| Punjabi | `pa` | ਪੰਜਾਬੀ |
| Assamese | `as` | অসমীয়া |
| Maithili | `mai` | मैथिली |
| Santali | `sat` | ᱥᱟᱱᱛᱟᱲᱤ |
| Kashmiri | `ks` | کٲشُر |
| Nepali | `ne` | नेपाली |
| Sindhi | `sd` | سنڌي |
| Konkani | `kok` | कोंकणी |
| Dogri | `doi` | डोगरी |
| Manipuri | `mni` | মৈতৈলোন্ |
| Bodo | `brx` | बड़ो |
| Sanskrit | `sa` | संस्कृतम् |
| English | `en` | English |

---

## 🤖 AI Features

| Feature | How it works |
|---------|-------------|
| **Crop Disease Diagnosis** | Upload leaf photo → Gemini Vision AI diagnoses disease & organic cures |
| **GramConnect Public Audit** | Real-time budget tracking, fund utilization, contractor info, before/after site photos & citizen audits |
| **Pardesh Setu (Family Bridge)** | Remote elder care for migrant children: remote scheme proxy-apply, clinic booking, UPI finance, document vault, Setu AI voice helper & SOS |
| **Scheme Eligibility** | "Am I eligible for PM-Kisan?" → AI explains requirements & steps in your language |
| **DBT Traffic Light** | Checks Aadhaar-DBT linking status (🔴 RED / 🟡 YELLOW / 🟢 GREEN) |
| **Voice Q&A** | Tap mic → speak in any Indian language → AI responds + reads aloud |
| **Floating Chat Widget** | 🤖 button on every single page → instant multi-tier AI assistance |

---

## 🚦 DBT Traffic Light System

| Color | Meaning | Action Required |
|-------|---------|-----------------|
| 🔴 **RED** | Aadhaar NOT linked to bank account | Visit home branch bank, fill Aadhaar seeding form |
| 🟡 **YELLOW** | Linked, but DBT / NPCI mapper inactive | Request branch manager to enable DBT on active account |
| 🟢 **GREEN** | Fully active and NPCI seeded | Receiving all government welfare payments directly ✅ |

---

## 🔌 Backend API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server status and database health |
| POST | `/api/auth/send-otp` | Send OTP to phone |
| POST | `/api/auth/verify-otp` | Verify OTP (use `123456` for demo) |
| GET | `/api/issues` | List all grievances |
| POST | `/api/issues` | Submit new village grievance |
| PATCH | `/api/issues/:id` | Update issue status (Panchayat Admin) |
| GET | `/api/mandi` | Get daily crop and commodity market rates |
| GET | `/api/schemes` | List government welfare schemes |
| POST | `/api/schemes/match` | Algorithmic and AI scheme eligibility matching |
| GET | `/api/dbt/status?userId=VID-7842` | DBT traffic light check |
| POST | `/api/ai/chat` | General village AI assistant chat |
| POST | `/api/ai/crop` | Crop disease diagnosis (text) |
| POST | `/api/ai/crop-vision` | Crop disease diagnosis from leaf photo |
| POST | `/api/ai/health` | Health symptom advice and doctor escalation |
| POST | `/api/ai/schemes` | Government scheme Q&A |
| POST | `/api/ai/translate` | Real-time text translation |

---

## 🗄️ Database & Offline Storage

- **Default**: MongoDB on `mongodb://localhost:27017/grohit`
- **Cloud**: Set `MONGO_URI` in `backend/.env` for MongoDB Atlas
- **Fallback**: Fast in-memory mode if MongoDB is not running + localStorage synchronization
- **PWA Service Worker**: Full offline support for static assets, pages, and cached data

---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, Vanilla CSS3 (Rural Design System), Vanilla JS (PWA) |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose (with in-memory fallback) |
| AI | Google Gemini 3.6 Flash / Gemini Flash API |
| Speech | Web Speech API (Synthesis & Recognition for Indian accents) |
| Offline | Service Worker (v4 Cache API + IndexedDB background sync) |
| Localization | 23 Indian languages via custom `i18n.js` with RTL & native scripts |
