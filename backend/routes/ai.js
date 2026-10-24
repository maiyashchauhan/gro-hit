// =============================================================
// AI ROUTES — Gemini API Integration
// Powers: crop diagnosis, health advice, scheme eligibility,
//         general rural assistant, voice Q&A
// =============================================================
const router = require("express").Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";

// Helper: call Gemini API
async function callGemini(model, contents, config = {}) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === "your_gemini_api_key_here") {
    throw new Error("GEMINI_API_KEY not configured in .env file");
  }

  const chosenModel = model || "gemini-3.6-flash";
  const url = `${GEMINI_BASE_URL}/${chosenModel}:generateContent?key=${GEMINI_API_KEY}`;
  const body = { contents, generationConfig: { maxOutputTokens: 1024, temperature: 0.7, ...config } };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      // If specific model fails, try gemini-flash-latest
      const fallbackUrl = `${GEMINI_BASE_URL}/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
      const fallbackRes = await fetch(fallbackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (fallbackRes.ok) {
        const fallbackData = await fallbackRes.json();
        return fallbackData.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
      }
      const err = await res.text();
      throw new Error(`Gemini API error: ${res.status} — ${err}`);
    }

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
  } catch (err) {
    throw err;
  }
}

// Language codes to full names
const LANG_NAMES = {
  hi: "Hindi (हिन्दी)", bn: "Bengali (বাংলা)", ta: "Tamil (தமிழ்)",
  te: "Telugu (తెలుగు)", mr: "Marathi (मराठी)", gu: "Gujarati (ગુજરાતી)",
  kn: "Kannada (ಕನ್ನಡ)", ml: "Malayalam (മലയാളം)", pa: "Punjabi (ਪੰਜਾਬੀ)",
  or: "Odia (ଓଡ଼ିଆ)", en: "English"
};

// ─────────────────────────────────────────────
// POST /api/ai/chat — General rural assistant
// ─────────────────────────────────────────────
router.post("/chat", async (req, res) => {
  try {
    const { message, language = "hi", context = "general" } = req.body;
    if (!message) return res.status(400).json({ error: "Message required" });

    const langName = LANG_NAMES[language] || "Hindi";
    const systemCtx = `You are Gro-Hit AI Assistant — a helpful rural support AI for Indian villages. 
You help with government schemes, crop diseases, health symptoms, Mandi prices, and village problems.
IMPORTANT: Always respond in ${langName}. Keep answers simple, short, and practical for rural farmers.
Current context: ${context}`;

    const text = await callGemini("gemini-3.6-flash", [{
      role: "user",
      parts: [{ text: `${systemCtx}\n\nUser question: ${message}` }]
    }]);

    res.json({ success: true, response: text, language });
  } catch (err) {
    if (err.message.includes("GEMINI_API_KEY")) {
      res.json({
        success: true,
        response: getFallbackResponse(req.body.message, req.body.language),
        language: req.body.language,
        fallback: true
      });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// ─────────────────────────────────────────────
// POST /api/ai/crop — Crop disease diagnosis (text)
// ─────────────────────────────────────────────
router.post("/crop", async (req, res) => {
  try {
    const { symptoms, cropType, language = "hi" } = req.body;
    const langName = LANG_NAMES[language] || "Hindi";

    const prompt = `You are an expert Indian agricultural scientist. A farmer reports this problem:
Crop: ${cropType || "Unknown crop"}
Symptoms: ${symptoms}

Respond in ${langName} with:
1. **Disease/Problem Name** (with local name)
2. **Cause** (in simple words)
3. **Immediate Treatment** (organic first, then chemical if needed)
4. **Prevention** for next season
5. **Helpline**: Kisan Call Center 1800-180-1551

Keep it short and practical for a rural farmer.`;

    const response = await callGemini("gemini-3.6-flash", [{ role: "user", parts: [{ text: prompt }] }]);
    res.json({ success: true, diagnosis: response, language });
  } catch (err) {
    res.json({
      success: true,
      diagnosis: getFallbackCropResponse(req.body.language),
      fallback: true
    });
  }
});

// ─────────────────────────────────────────────
// POST /api/ai/crop-vision — Crop disease from image
// ─────────────────────────────────────────────
router.post("/crop-vision", async (req, res) => {
  try {
    const { imageBase64, mimeType = "image/jpeg", language = "hi" } = req.body;
    if (!imageBase64) return res.status(400).json({ error: "imageBase64 required" });

    const langName = LANG_NAMES[language] || "Hindi";

    const contents = [{
      role: "user",
      parts: [
        {
          inlineData: {
            mimeType: mimeType,
            data: imageBase64.replace(/^data:image\/\w+;base64,/, "")
          }
        },
        {
          text: `You are an expert Indian agricultural scientist. Analyze this crop leaf/plant image.
Respond in ${langName} with:
1. **Identified Disease/Problem** (with Hindi/local name)
2. **Confidence Level** (High/Medium/Low)
3. **Immediate organic treatment**
4. **Chemical treatment** (if needed)
5. **Prevention tips**
6. **Kisan Call Center**: 1800-180-1551

Keep it simple for a rural farmer.`
        }
      ]
    }];

    const response = await callGemini("gemini-3.6-flash", contents);
    res.json({ success: true, diagnosis: response, language });
  } catch (err) {
    res.json({
      success: true,
      diagnosis: getFallbackCropResponse(req.body.language),
      fallback: true
    });
  }
});

// ─────────────────────────────────────────────
// POST /api/ai/health — Health symptom checker
// ─────────────────────────────────────────────
router.post("/health", async (req, res) => {
  try {
    const { symptoms, age, gender, language = "hi" } = req.body;
    const langName = LANG_NAMES[language] || "Hindi";

    const prompt = `You are a rural health assistant for Indian villages. A patient reports:
Age: ${age || "Adult"}
Gender: ${gender || "Not specified"}
Symptoms: ${symptoms}

Respond in ${langName} with:
1. **Possible Condition** (common name, not technical)
2. **Home Remedy** (safe, available in village)
3. **When to visit Doctor** (urgent signs to watch for)
4. **Nearby Help**: 
   - 108 Ambulance (free)
   - National Health Helpline: 104
   - Ayushman Bharat hospitals (free up to ₹5 Lakh)

⚠️ IMPORTANT: Always end with "This is general guidance only. Please consult a doctor for diagnosis."`;

    const response = await callGemini("gemini-3.6-flash", [{ role: "user", parts: [{ text: prompt }] }]);
    res.json({ success: true, advice: response, language });
  } catch (err) {
    res.json({
      success: true,
      advice: getFallbackHealthResponse(req.body.language),
      fallback: true
    });
  }
});

// ─────────────────────────────────────────────
// POST /api/ai/schemes — Scheme eligibility Q&A
// ─────────────────────────────────────────────
router.post("/schemes", async (req, res) => {
  try {
    const { question, language = "hi" } = req.body;
    const langName = LANG_NAMES[language] || "Hindi";

    const prompt = `You are an expert on Indian government welfare schemes. Answer this question:
"${question}"

Respond in ${langName} with:
1. **Direct Answer** (yes/no with reason)
2. **Key Requirements** to be eligible
3. **How to Apply** (steps)
4. **Documents Needed**
5. **Official Portal link**

Keep it simple for a rural farmer who may have never used a computer.`;

    const response = await callGemini("gemini-3.6-flash", [{ role: "user", parts: [{ text: prompt }] }]);
    res.json({ success: true, answer: response, language });
  } catch (err) {
    res.json({
      success: true,
      answer: getFallbackSchemeResponse(req.body.language),
      fallback: true
    });
  }
});

// ─────────────────────────────────────────────
// POST /api/ai/translate — Translate text
// ─────────────────────────────────────────────
router.post("/translate", async (req, res) => {
  try {
    const { text, targetLang } = req.body;
    const langName = LANG_NAMES[targetLang] || "Hindi";

    const prompt = `Translate the following text to ${langName}. Return ONLY the translated text, nothing else:\n\n${text}`;
    const translated = await callGemini("gemini-3.6-flash", [{ role: "user", parts: [{ text: prompt }] }], { temperature: 0.3 });
    res.json({ success: true, original: text, translated, targetLang });
  } catch (err) {
    res.json({ success: true, translated: text, fallback: true });
  }
});

// ─────────────────────────────────────────────
// FALLBACK RESPONSES (when API key not set)
// ─────────────────────────────────────────────
function getFallbackResponse(message, lang) {
  const responses = {
    hi: "🤖 नमस्ते! मैं Gro-Hit AI सहायक हूं। कृपया अपना Gemini API key .env फ़ाइल में जोड़ें पूर्ण AI सहायता के लिए। आप किसान हेल्पलाइन 1800-180-1551 पर भी कॉल कर सकते हैं।",
    en: "🤖 Hello! I'm Gro-Hit AI. Please add your Gemini API key in backend/.env for full AI support. You can also call Kisan Helpline: 1800-180-1551",
    ta: "🤖 வணக்கம்! Gemini API key .env கோப்பில் சேர்க்கவும். கிசான் உதவி: 1800-180-1551",
    bn: "🤖 নমস্কার! Gemini API key যোগ করুন। কৃষক হেল্পলাইন: 1800-180-1551",
    te: "🤖 నమస్కారం! Gemini API key జోడించండి. కిసాన్ హెల్ప్‌లైన్: 1800-180-1551"
  };
  return responses[lang] || responses.hi;
}

function getFallbackCropResponse(lang) {
  const responses = {
    hi: "🌾 फसल रोग विश्लेषण के लिए कृपया Gemini API key जोड़ें। तत्काल सहायता के लिए किसान कॉल सेंटर: 1800-180-1551 पर कॉल करें। कृषि विभाग से मुफ्त मिट्टी परीक्षण करवाएं।",
    en: "🌾 Add Gemini API key for AI crop diagnosis. Immediate help: Kisan Call Center 1800-180-1551. Visit your nearest Krishi Vigyan Kendra for free advice."
  };
  return responses[lang] || responses.hi;
}

function getFallbackHealthResponse(lang) {
  const responses = {
    hi: "🏥 स्वास्थ्य सलाह के लिए AI key जोड़ें। आपातकाल में: 108 एम्बुलेंस। स्वास्थ्य हेल्पलाइन: 104 (मुफ्त)। आयुष्मान भारत कार्ड से ₹5 लाख तक मुफ्त इलाज।",
    en: "🏥 Add Gemini API key for AI health advice. Emergency: Call 108 Ambulance. Health Helpline: 104 (Free). Ayushman Bharat: Free treatment up to ₹5 Lakh."
  };
  return responses[lang] || responses.hi;
}

function getFallbackSchemeResponse(lang) {
  const responses = {
    hi: "📜 योजना जानकारी के लिए AI key जोड़ें। PM-Kisan के लिए pmkisan.gov.in पर जाएं। ग्राम पंचायत कार्यालय से भी जानकारी लें। हेल्पलाइन: 155261",
    en: "📜 Add Gemini API key for AI scheme advice. Visit pmkisan.gov.in for PM-Kisan. Contact your Gram Panchayat office. Helpline: 155261"
  };
  return responses[lang] || responses.hi;
}

module.exports = router;
