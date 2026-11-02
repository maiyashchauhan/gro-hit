// =============================================================
// GRO-HIT — Floating AI Assistant Widget v3
// Smart 3-tier: Backend AI → Optional Client Key → Rich Offline Fallback
// =============================================================

const GroHitAI = {
  API_BASE: (typeof window !== "undefined" && window.location.port === "5000") ? "/api" : "http://localhost:5000/api",

  // ─── AI Configuration ─────────────────────────────────────
  // Sensitive API keys are managed exclusively on the backend (backend/.env)
  // to avoid exposing credentials in client-side code.
  GEMINI_API_KEY: "",
  GEMINI_URL: "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",

  isOpen: false,
  isListening: false,
  recognition: null,
  chatHistory: [],

  // ─── Initialize ──────────────────────────────────────────
  init() {
    this.createWidget();
    this.setupSpeechRecognition();
    this.setupVoiceButtons();
    console.log("🤖 Gro-Hit AI Assistant v3 initialized");
  },

  // ─── Create Floating Chat Widget ─────────────────────────
  createWidget() {
    document.getElementById("grohit-ai-widget")?.remove();
    const widget = document.createElement("div");
    widget.id = "grohit-ai-widget";
    widget.innerHTML = `
      <!-- Floating Button -->
      <button id="ai-fab" class="ai-fab" title="AI Assistant" aria-label="Open AI Assistant">
        <span class="ai-fab-icon">🤖</span>
        <span class="ai-fab-pulse"></span>
      </button>

      <!-- Chat Panel -->
      <div id="ai-panel" class="ai-panel" style="display:none;" role="dialog" aria-label="AI Chat Assistant">
        <div class="ai-panel-header">
          <div class="ai-header-title">
            <span>🤖</span>
            <div>
              <div class="ai-name">Gro-Hit AI</div>
              <div class="ai-subtitle" id="ai-subtitle">आपका ग्रामीण सहायक</div>
            </div>
          </div>
          <div class="ai-header-actions">
            <button class="ai-clear-btn" onclick="GroHitAI.clearChat()" title="Clear chat">🗑️</button>
            <button class="ai-close-btn" onclick="GroHitAI.toggle()" title="Close">✕</button>
          </div>
        </div>

        <!-- Quick Questions -->
        <div class="ai-quick-btns" id="ai-quick-btns">
          <button onclick="GroHitAI.sendMessage('Am I eligible for PM-Kisan?')">🌾 PM-Kisan?</button>
          <button onclick="GroHitAI.sendMessage('What is DBT and how to enable it?')">💰 DBT?</button>
          <button onclick="GroHitAI.sendMessage('My crops have yellow leaves, what should I do?')">🌿 Crop disease?</button>
          <button onclick="GroHitAI.sendMessage('I have fever and headache, what should I do?')">🩺 Health?</button>
          <button onclick="GroHitAI.sendMessage('What government jobs are available for rural youth?')">💼 Jobs?</button>
          <button onclick="GroHitAI.sendMessage('How to get Ayushman Bharat card?')">🏥 Ayushman?</button>
        </div>

        <!-- Messages -->
        <div class="ai-messages" id="ai-messages">
          <div class="ai-msg ai-msg-bot">
            <span class="ai-avatar">🤖</span>
            <div class="ai-msg-content">
              <p id="ai-welcome-msg">नमस्ते! मैं Gro-Hit AI हूं। मैं आपकी सरकारी योजनाओं, फसल रोग, स्वास्थ्य और ग्राम सेवाओं में मदद करूंगा। कुछ भी पूछें!</p>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="ai-input-area">
          <div class="ai-input-row">
            <input type="text" id="ai-input" class="ai-input"
                   placeholder="कुछ भी पूछें..."
                   data-i18n-placeholder="ai.placeholder"
                   autocomplete="off" />
            <button id="ai-voice-btn" class="ai-voice-btn" onclick="GroHitAI.toggleVoice()" title="Voice input">
              🎤
            </button>
            <button class="ai-send-btn" onclick="GroHitAI.sendFromInput()">
              <span data-i18n="ai.send">भेजें</span>
            </button>
          </div>
          <div class="ai-input-hint" id="ai-voice-status" style="display:none; color:#0369a1; font-size:0.8rem; text-align:center; padding:4px;">
            🎤 सुन रहा हूं... बोलिए
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(widget);
    document.getElementById("ai-fab").addEventListener("click", () => this.toggle());
    document.getElementById("ai-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.sendFromInput();
    });
  },

  // ─── Toggle panel ─────────────────────────────────────────
  toggle() {
    const panel = document.getElementById("ai-panel");
    const fab   = document.getElementById("ai-fab");
    this.isOpen = !this.isOpen;
    panel.style.display = this.isOpen ? "flex" : "none";
    fab.classList.toggle("active", this.isOpen);
    if (this.isOpen) {
      document.getElementById("ai-input").focus();
      this.updateLanguage();
    }
  },

  // ─── Update AI subtitle language ─────────────────────────
  updateLanguage() {
    const lang = (typeof GroHitI18n !== "undefined") ? GroHitI18n.current : "hi";
    const subtitles = {
      hi:"आपका ग्रामीण सहायक", en:"Your rural assistant",
      bn:"আপনার গ্রামীণ সহায়ক", ta:"உங்கள் கிராம உதவியாளர்",
      te:"మీ గ్రామీణ సహాయకుడు", mr:"तुमचा ग्रामीण सहाय्यक",
      gu:"તમારો ગ્રામ સહायक", kn:"ನಿಮ್ಮ ಗ್ರಾಮೀಣ ಸಹಾಯಕ",
      ml:"നിങ്ങളുടെ ഗ്രാമീണ സഹായി", pa:"ਤੁਹਾਡਾ ਗ੍ਰਾਮੀਣ ਸਹਾਇਕ",
      or:"ଆପଣଙ୍କ ଗ୍ରାମୀଣ ସହାୟ", ur:"آپ کا دیہی معاون",
      sa:"भवतः ग्रामीण सहायकः", mai:"अहाँक ग्रामीण सहायक"
    };
    const el = document.getElementById("ai-subtitle");
    if (el) el.textContent = subtitles[lang] || subtitles.hi;
  },

  // ─── Send from input box ──────────────────────────────────
  sendFromInput() {
    const input = document.getElementById("ai-input");
    const msg = input.value.trim();
    if (!msg) return;
    input.value = "";
    this.sendMessage(msg);
  },

  // ─── MAIN SEND — 3-tier: Backend → Gemini Direct → Fallback
  async sendMessage(message, type = "chat") {
    if (!message.trim()) return;

    const quickBtns = document.getElementById("ai-quick-btns");
    if (quickBtns) quickBtns.style.display = "none";

    this.addMessage(message, "user");
    this.chatHistory.push({ role: "user", content: message });

    const typingId = this.addTyping();
    const lang = (typeof GroHitI18n !== "undefined") ? GroHitI18n.current : "hi";

    try {
      // ── TIER 1: Try backend server ───────────────────────
      let response = await this.tryBackend(message, lang);

      if (response) {
        this.removeTyping(typingId);
        this.addMessage(response, "bot");
        this.chatHistory.push({ role: "assistant", content: response });
        if (window.GroHit?.voiceMode) window.GroHit.speakText(response);
        return;
      }

      // ── TIER 2: Call Gemini directly from browser ────────
      response = await this.tryGeminiDirect(message, lang);

      if (response) {
        this.removeTyping(typingId);
        this.addMessage(response, "bot");
        this.chatHistory.push({ role: "assistant", content: response });
        if (window.GroHit?.voiceMode) window.GroHit.speakText(response);
        return;
      }

      // ── TIER 3: Smart keyword fallback ───────────────────
      throw new Error("All tiers failed");

    } catch (err) {
      this.removeTyping(typingId);
      const fallback = this.getSmartFallback(message, lang);
      this.addMessage(fallback, "bot");
      console.warn("AI fallback used:", err.message);
    }
  },

  // ─── Tier 1: Try backend at localhost:5000 ────────────────
  async tryBackend(message, lang) {
    try {
      const page = this.detectPage();
      let endpoint = "chat";
      let body = { message, language: lang, context: page };

      if (/crop|फसल|disease|रोग|पत्ता|leaf/i.test(message)) {
        endpoint = "crop"; body = { symptoms: message, cropType: "unknown", language: lang };
      } else if (/health|fever|बुखार|symptom|दर्द|pain|sick|बीमार/i.test(message)) {
        endpoint = "health"; body = { symptoms: message, language: lang };
      } else if (/scheme|योजना|eligible|kisan|ayushman|pmay|dbt/i.test(message)) {
        endpoint = "schemes"; body = { question: message, language: lang };
      }

      const res = await fetch(`${this.API_BASE}/ai/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(4000) // 4 second timeout
      });

      if (!res.ok) return null;
      const data = await res.json();
      return data.response || data.diagnosis || data.advice || data.answer || null;
    } catch {
      return null; // backend not running — move to Tier 2
    }
  },

  // ─── Tier 2: Direct browser call (only if runtime key provided) ─
  async tryGeminiDirect(message, lang) {
    try {
      // Sensitive keys must never be hardcoded into frontend scripts.
      // If a session key is explicitly injected via window.GROHIT_GEMINI_KEY or localStorage, use it.
      const key = (typeof window !== "undefined" && window.GROHIT_GEMINI_KEY) || 
                  (typeof localStorage !== "undefined" && localStorage.getItem("grohit_gemini_api_key")) || 
                  this.GEMINI_API_KEY;
      if (!key || key.includes("Demo-replace") || key === "your_gemini_api_key_here") {
        return null; // no direct client key configured — proceed safely
      }

      const langNames = {
        hi:"Hindi", en:"English", bn:"Bengali", ta:"Tamil", te:"Telugu",
        mr:"Marathi", gu:"Gujarati", kn:"Kannada", ml:"Malayalam",
        pa:"Punjabi", or:"Odia", ur:"Urdu", sa:"Sanskrit", mai:"Maithili",
        ne:"Nepali", kok:"Konkani", doi:"Dogri", as:"Assamese"
      };
      const langName = langNames[lang] || "Hindi";

      const systemPrompt = `You are Gro-Hit AI — a helpful rural support assistant for Indian villages.
Help with: government schemes (PM-Kisan, Ayushman, PMAY, MGNREGA, KCC, DBT), crop diseases, health symptoms, Mandi prices, village problems.
IMPORTANT: Always respond in ${langName}. Keep answers short, simple, and practical for rural farmers.
Always include relevant helpline numbers when giving health/crop advice.`;

      const res = await fetch(`${this.GEMINI_URL}?key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: `${systemPrompt}\n\nUser: ${message}` }] }],
          generationConfig: { maxOutputTokens: 800, temperature: 0.7 }
        }),
        signal: AbortSignal.timeout(10000)
      });

      if (!res.ok) return null;
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch {
      return null; // Gemini failed — move to Tier 3
    }
  },

  // ─── Tier 3: Smart keyword-based rich fallback ────────────
  getSmartFallback(message, lang) {
    const msg = message.toLowerCase();

    // ── SCHEMES ──
    if (/pm.?kisan|किसान|pmkisan/i.test(msg)) {
      return {
        hi: "🌾 **PM-Kisan Samman Nidhi**\n\n✅ **पात्रता:** 18+ उम्र, खेती की जमीन हो, परिवार की आमदनी ₹2 लाख से कम\n\n💰 **लाभ:** ₹6,000 सालाना — 3 किश्तों में सीधे बैंक खाते में\n\n📱 **कैसे करें:** pmkisan.gov.in पर जाएं या नजदीकी CSC जाएं\n\n📞 हेल्पलाइन: **155261**",
        en: "🌾 **PM-Kisan Samman Nidhi**\n\n✅ **Eligibility:** Age 18+, own agricultural land, family income below ₹2 Lakh\n\n💰 **Benefit:** ₹6,000/year in 3 installments directly to bank\n\n📱 **Apply at:** pmkisan.gov.in or nearest CSC center\n\n📞 Helpline: **155261**"
      }[lang] || "🌾 PM-Kisan: ₹6,000/year for farmers. Apply at pmkisan.gov.in | Helpline: 155261";
    }

    if (/ayushman|आयुष्मान|pmjay|health card|हेल्थ कार्ड/i.test(msg)) {
      return {
        hi: "🏥 **आयुष्मान भारत - PM-JAY**\n\n✅ **पात्रता:** BPL कार्ड धारक, आमदनी ₹2 लाख से कम\n\n💰 **लाभ:** परिवार के लिए ₹5 लाख तक मुफ्त इलाज\n\n📱 **कार्ड कैसे बनाएं:** pmjay.gov.in पर या नजदीकी अस्पताल में\n\n📞 हेल्पलाइन: **14555**",
        en: "🏥 **Ayushman Bharat PM-JAY**\n\n✅ BPL card holders eligible\n\n💰 Free treatment up to ₹5 Lakh per family per year\n\n📱 Apply at: pmjay.gov.in\n\n📞 Helpline: **14555**"
      }[lang] || "🏥 Ayushman Bharat: Free ₹5 Lakh health cover. Helpline: 14555";
    }

    if (/mgnrega|mnrega|job card|नरेगा|रोजगार गारंटी/i.test(msg)) {
      return {
        hi: "🏗️ **MGNREGA - रोजगार गारंटी**\n\n✅ **पात्रता:** ग्रामीण क्षेत्र में रहने वाले 18+ उम्र के सभी\n\n💰 **लाभ:** 100 दिन का रोजगार, ₹267/दिन मजदूरी\n\n📋 **कैसे करें:** ग्राम पंचायत से Job Card बनवाएं\n\n📞 हेल्पलाइन: **1800-111-555**",
        en: "🏗️ **MGNREGA**\n\n✅ All rural adults (18+) eligible\n\n💰 100 days guaranteed work at ₹267/day\n\n📋 Get Job Card from Gram Panchayat\n\n📞 Helpline: **1800-111-555**"
      }[lang] || "🏗️ MGNREGA: 100 days guaranteed work at ₹267/day. Get Job Card from Panchayat.";
    }

    if (/dbt|direct benefit|आधार लिंक|aadhaar link/i.test(msg)) {
      return {
        hi: "🚦 **DBT (Direct Benefit Transfer)**\n\n🔴 **लाल:** आधार बैंक से लिंक नहीं → बैंक जाएं\n🟡 **पीला:** लिंक है लेकिन DBT चालू नहीं → DBT activation मांगें\n🟢 **हरा:** सब ठीक है, पैसा मिल रहा है\n\n📞 बैंक हेल्पलाइन: **1800-180-1111**",
        en: "🚦 **DBT Traffic Light**\n\n🔴 RED: Aadhaar not linked → visit bank branch\n🟡 YELLOW: Linked but DBT not active → request activation\n🟢 GREEN: All good, receiving payments\n\n📞 Bank Helpline: **1800-180-1111**"
      }[lang] || "🚦 DBT: Link Aadhaar to bank for govt payments. Bank helpline: 1800-180-1111";
    }

    if (/kcc|kisan credit|किसान क्रेडिट|loan|लोन/i.test(msg)) {
      return {
        hi: "💳 **किसान क्रेडिट कार्ड (KCC)**\n\n✅ **पात्रता:** किसान, मछुआरे, पशुपालक\n\n💰 **लाभ:** ₹3 लाख तक खेती का लोन सिर्फ 4% ब्याज पर\n\n📋 **कैसे करें:** नजदीकी बैंक या CSC में आवेदन करें\n\n📞 हेल्पलाइन: **1800-180-1551**",
        en: "💳 **Kisan Credit Card (KCC)**\n\n✅ Farmers, fishermen, dairy farmers eligible\n\n💰 Up to ₹3 Lakh farm loan at just 4% interest\n\n📋 Apply at nearest bank or CSC\n\n📞 Helpline: **1800-180-1551**"
      }[lang] || "💳 KCC: ₹3 Lakh farm loan at 4% interest. Apply at bank. Helpline: 1800-180-1551";
    }

    // ── CROPS ──
    if (/yellow.*leaf|पीला|पत्ते पीले|leaves yellow/i.test(msg)) {
      return {
        hi: "🌿 **पत्ते पीले होना — संभावित कारण:**\n\n1. **नाइट्रोजन की कमी** → यूरिया खाद डालें\n2. **पानी की अधिकता** → जल निकासी करें\n3. **फंगल रोग** → Mancozeb 0.2% छिड़काव करें\n\n✅ **तत्काल करें:** पत्ता तोड़कर कृषि विभाग को दिखाएं\n\n📞 किसान कॉल सेंटर: **1800-180-1551** (मुफ्त)",
        en: "🌿 **Yellow Leaves — Possible Causes:**\n\n1. **Nitrogen deficiency** → Apply urea fertilizer\n2. **Overwatering** → Improve drainage\n3. **Fungal disease** → Spray Mancozeb 0.2%\n\n✅ Take a leaf sample to your agriculture office\n\n📞 Kisan Call Center: **1800-180-1551** (Free)"
      }[lang] || "🌿 Yellow leaves: Check nitrogen, water, or fungal disease. Kisan helpline: 1800-180-1551";
    }

    if (/crop|फसल|disease|रोग|खेती|agriculture|farm/i.test(msg)) {
      return {
        hi: "🌾 **फसल सलाह के लिए:**\n\n📞 किसान कॉल सेंटर: **1800-180-1551** (24×7 मुफ्त)\n📍 नजदीकी कृषि विज्ञान केंद्र (KVK) जाएं\n🌐 mkisan.gov.in पर जानकारी लें\n\n🤖 बेहतर AI सहायता के लिए Gemini API key जोड़ें।",
        en: "🌾 **For crop advice:**\n\n📞 Kisan Call Center: **1800-180-1551** (Free 24×7)\n📍 Visit nearest Krishi Vigyan Kendra (KVK)\n🌐 mkisan.gov.in for more info"
      }[lang] || "🌾 Crop help: Kisan Call Center 1800-180-1551 (free, 24x7)";
    }

    // ── HEALTH ──
    if (/fever|बुखार|temperature|तापमान/i.test(msg)) {
      return {
        hi: "🤒 **बुखार के लिए:**\n\n✅ **घर पर करें:** पैरासिटामोल, ठंडा पानी का कपड़ा, खूब पानी पिएं\n⚠️ **डॉक्टर जाएं यदि:** बुखार 3 दिन से ज्यादा, 103°F से ऊपर, दाने या ठंड लगे\n\n📞 **मुफ्त हेल्पलाइन:** 104\n🚑 **एम्बुलेंस:** 108\n\n⚠️ यह सामान्य जानकारी है। डॉक्टर से मिलें।",
        en: "🤒 **For Fever:**\n\n✅ Home care: Paracetamol, cool cloth, drink fluids\n⚠️ See doctor if: fever 3+ days, above 103°F, rash or chills\n\n📞 Free helpline: **104**\n🚑 Ambulance: **108**\n\n⚠️ This is general guidance. Consult a doctor."
      }[lang] || "🤒 Fever: Paracetamol, rest, fluids. Health helpline: 104. Ambulance: 108";
    }

    if (/health|sick|बीमार|symptom|दर्द|pain|hospital|अस्पताल/i.test(msg)) {
      return {
        hi: "🏥 **स्वास्थ्य सहायता:**\n\n📞 **स्वास्थ्य हेल्पलाइन:** 104 (मुफ्त)\n🚑 **एम्बुलेंस:** 108 (मुफ्त)\n🏥 **आयुष्मान भारत:** ₹5 लाख तक मुफ्त इलाज\n\nलक्षण बताएं — मैं और सहायता करूंगा।\n\n⚠️ आपातकाल में तुरंत 108 पर कॉल करें।",
        en: "🏥 **Health Support:**\n\n📞 Health helpline: **104** (Free)\n🚑 Ambulance: **108** (Free)\n🏥 Ayushman Bharat: Free up to ₹5 Lakh\n\nDescribe your symptoms for more specific help.\n\n⚠️ In emergency, call 108 immediately."
      }[lang] || "🏥 Health: Helpline 104, Ambulance 108, Ayushman card for free treatment.";
    }

    // ── MANDI / PRICE ──
    if (/mandi|price|भाव|market|बाजार|wheat|गेहूं|rice|चावल|onion|प्याज/i.test(msg)) {
      return {
        hi: "🧾 **मंडी भाव जानने के लिए:**\n\n🌐 **agmarknet.gov.in** — सभी मंडियों के लाइव भाव\n📱 **eNAM ऐप** — राष्ट्रीय कृषि बाजार\n📞 **किसान कॉल सेंटर:** 1800-180-1551\n\nऐप में Mandi सेक्शन में जाएं → अपनी फसल चुनें → लाइव भाव देखें।",
        en: "🧾 **For Mandi Prices:**\n\n🌐 agmarknet.gov.in — Live prices all mandis\n📱 eNAM App — National Agriculture Market\n📞 Kisan Call Center: 1800-180-1551\n\nVisit Mandi section in this app to check today's prices."
      }[lang] || "🧾 Mandi prices: agmarknet.gov.in or Kisan helpline 1800-180-1551";
    }

    // ── JOBS ──
    if (/job|नौकरी|roz.*gar|रोजगार|employment|काम|work/i.test(msg)) {
      return {
        hi: "💼 **रोजगार के अवसर:**\n\n🏗️ **MGNREGA:** 100 दिन काम, ₹267/दिन — पंचायत से Job Card बनाएं\n📱 **NCS Portal:** ncs.gov.in — सरकारी नौकरियां\n🌾 **PM-SVANidhi:** छोटे व्यवसाय के लिए ₹10,000 लोन\n\n📞 रोजगार हेल्पलाइन: **1800-425-1514**",
        en: "💼 **Employment Opportunities:**\n\n🏗️ MGNREGA: 100 days work, ₹267/day — get Job Card from Panchayat\n📱 NCS Portal: ncs.gov.in for govt jobs\n🌾 PM-SVANidhi: ₹10,000 loan for small business\n\n📞 Employment helpline: **1800-425-1514**"
      }[lang] || "💼 Jobs: MGNREGA (100 days, ₹267/day), NCS Portal ncs.gov.in. Helpline: 1800-425-1514";
    }

    // ── SOS / EMERGENCY ──
    if (/sos|emergency|आपातकाल|accident|दुर्घटना|help|मदद/i.test(msg)) {
      return {
        hi: "🚨 **आपातकालीन नंबर:**\n\n🚑 **एम्बुलेंस:** 108\n🚒 **अग्निशमन:** 101\n👮 **पुलिस:** 100\n📞 **सभी आपातकाल:** 112\n🏥 **स्वास्थ्य:** 104\n\n⚠️ **SOS बटन** ऊपर header में है — एक click में GPS location के साथ मदद बुलाएं!",
        en: "🚨 **Emergency Numbers:**\n\n🚑 Ambulance: **108**\n🚒 Fire: **101**\n👮 Police: **100**\n📞 All emergencies: **112**\n🏥 Health: **104**\n\n⚠️ Use the **SOS button** in the header — it sends your GPS location instantly!"
      }[lang] || "🚨 Emergency: 112 (all), 108 (ambulance), 100 (police), 104 (health)";
    }

    // ── DEFAULT ──
    const defaults = {
      hi: `🤖 मैं Gro-Hit AI हूं! मैं इन विषयों में मदद कर सकता हूं:\n\n🌾 **फसल रोग** — लक्षण बताएं\n📜 **सरकारी योजनाएं** — PM-Kisan, Ayushman, MGNREGA\n🏥 **स्वास्थ्य** — लक्षण पूछें\n💰 **DBT / बैंक** — सहायता\n💼 **रोजगार** — नौकरी के अवसर\n\n📞 किसान हेल्पलाइन: **1800-180-1551**\nकुछ भी पूछें! 😊`,
      en: `🤖 I'm Gro-Hit AI! I can help with:\n\n🌾 **Crop diseases** — describe symptoms\n📜 **Govt schemes** — PM-Kisan, Ayushman, MGNREGA\n🏥 **Health** — describe symptoms\n💰 **DBT / Bank** — linking help\n💼 **Jobs** — employment opportunities\n\n📞 Kisan helpline: **1800-180-1551**\nAsk me anything! 😊`,
      ta: `🤖 நான் Gro-Hit AI! கீழ்க்காணும் விஷயங்களில் உதவ முடியும்:\n\n🌾 பயிர் நோய்கள்\n📜 அரசு திட்டங்கள் (PM-Kisan, Ayushman)\n🏥 சுகாதார ஆலோசனை\n\n📞 கிசான் உதவி: 1800-180-1551`,
      te: `🤖 నేను Gro-Hit AI! నేను ఈ విషయాలలో సహాయం చేయగలను:\n\n🌾 పంట వ్యాధులు\n📜 ప్రభుత్వ పథకాలు\n🏥 ఆరోగ్య సలహా\n\n📞 కిసాన్ హెల్ప్‌లైన్: 1800-180-1551`,
      bn: `🤖 আমি Gro-Hit AI! আমি এই বিষয়ে সাহায্য করতে পারি:\n\n🌾 ফসলের রোগ\n📜 সরকারি প্রকল্প (PM-Kisan, Ayushman)\n🏥 স্বাস্থ্য পরামর্শ\n\n📞 কিসান হেল্পলাইন: 1800-180-1551`
    };
    return defaults[lang] || defaults.hi;
  },

  // ─── Add message bubble ───────────────────────────────────
  addMessage(text, role) {
    const messages = document.getElementById("ai-messages");
    const div = document.createElement("div");
    div.className = `ai-msg ai-msg-${role}`;
    div.innerHTML = `
      ${role === "bot" ? '<span class="ai-avatar">🤖</span>' : ""}
      <div class="ai-msg-content">
        <p>${text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>")}</p>
        ${role === "bot" ? `<button class="ai-speak-btn" onclick="GroHitAI.speak(this)" data-text="${text.replace(/"/g, "&quot;")}">🔊</button>` : ""}
      </div>
      ${role === "user" ? '<span class="ai-avatar ai-user-av">👤</span>' : ""}
    `;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  },

  // ─── Typing indicator ─────────────────────────────────────
  addTyping() {
    const id = "typing-" + Date.now();
    const messages = document.getElementById("ai-messages");
    const div = document.createElement("div");
    div.className = "ai-msg ai-msg-bot";
    div.id = id;
    div.innerHTML = `<span class="ai-avatar">🤖</span><div class="ai-msg-content ai-typing"><span></span><span></span><span></span></div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return id;
  },
  removeTyping(id) { document.getElementById(id)?.remove(); },

  // ─── Speak text ───────────────────────────────────────────
  speak(btn) {
    const text = btn.getAttribute("data-text");
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = (typeof GroHitI18n !== "undefined")
        ? GroHitI18n.getSpeechLang(GroHitI18n.current) : "hi-IN";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  },

  // ─── Speech Recognition ───────────────────────────────────
  setupSpeechRecognition() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    this.recognition = new SR();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.onresult = (e) => {
      document.getElementById("ai-input").value = e.results[0][0].transcript;
      this.sendFromInput();
      this.setVoiceStatus(false);
    };
    this.recognition.onerror = () => this.setVoiceStatus(false);
    this.recognition.onend   = () => this.setVoiceStatus(false);
  },

  toggleVoice() {
    if (!this.recognition) { alert("Voice input not supported. Use Chrome."); return; }
    if (this.isListening) {
      this.recognition.stop(); this.setVoiceStatus(false);
    } else {
      const lang = (typeof GroHitI18n !== "undefined") ? GroHitI18n.getSpeechLang(GroHitI18n.current) : "hi-IN";
      this.recognition.lang = lang;
      this.recognition.start(); this.setVoiceStatus(true);
    }
  },

  setVoiceStatus(active) {
    this.isListening = active;
    document.getElementById("ai-voice-btn")?.classList.toggle("listening", active);
    const s = document.getElementById("ai-voice-status");
    if (s) s.style.display = active ? "block" : "none";
  },

  setupVoiceButtons() {
    const btn = document.getElementById("voiceAssistBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        if (!this.isOpen) this.toggle();
        this.toggleVoice();
      });
    }
  },

  clearChat() {
    document.getElementById("ai-messages").innerHTML = `
      <div class="ai-msg ai-msg-bot">
        <span class="ai-avatar">🤖</span>
        <div class="ai-msg-content"><p>नई बातचीत शुरू! कुछ भी पूछें। 😊</p></div>
      </div>`;
    this.chatHistory = [];
    document.getElementById("ai-quick-btns").style.display = "flex";
  },

  detectPage() {
    const p = window.location.pathname;
    if (p.includes("schemes")) return "government schemes and DBT";
    if (p.includes("crop"))    return "crop disease and agriculture";
    if (p.includes("health"))  return "health and medical advice";
    if (p.includes("mandi"))   return "market prices";
    if (p.includes("jobs"))    return "employment and jobs";
    if (p.includes("report"))  return "village issues and grievances";
    return "general rural support";
  }
};

// Auto-initialize
document.addEventListener("DOMContentLoaded", () => {
  GroHitAI.init();
  window.addEventListener("grohit-lang-changed", () => GroHitAI.updateLanguage());
});
