// =============================================================
// SCHEMES ROUTES
// =============================================================
const router = require("express").Router();

const schemesData = [
  {
    id: 1, title: "PM Kisan Samman Nidhi", hindiTitle: "पीएम किसान सम्मान निधि",
    category: "Farming", icon: "🌾",
    benefit: "₹6,000 yearly in 3 installments directly in bank account.",
    description: "Central income support scheme for all landholding farmer families.",
    eligibility: { minAge: 18, maxAge: 99, occupation: ["farmer"], landRequired: true, annualIncomeCap: 200000 },
    dbtRequired: true, link: "https://pmkisan.gov.in/"
  },
  {
    id: 2, title: "PM Fasal Bima Yojana (PMFBY)", hindiTitle: "प्रधानमंत्री फसल बीमा योजना",
    category: "Insurance", icon: "🛡️",
    benefit: "Comprehensive crop loss coverage at low 1.5–2% premium.",
    description: "Financial support for crop loss from unforeseen weather events.",
    eligibility: { minAge: 18, occupation: ["farmer"], landRequired: true },
    dbtRequired: false, link: "https://pmfby.gov.in/"
  },
  {
    id: 3, title: "Ayushman Bharat (PM-JAY)", hindiTitle: "आयुष्मान भारत - जन आरोग्य योजना",
    category: "Health", icon: "🏥",
    benefit: "Free hospital treatment up to ₹5 Lakh per family per year.",
    description: "Cashless secondary & tertiary healthcare at empanelled hospitals.",
    eligibility: { minAge: 0, annualIncomeCap: 200000, bplCard: true },
    dbtRequired: false, link: "https://pmjay.gov.in/"
  },
  {
    id: 4, title: "PM Awas Yojana - Gramin", hindiTitle: "प्रधानमंत्री ग्रामीण आवास योजना",
    category: "Housing", icon: "🏠",
    benefit: "₹1.20–₹1.30 Lakh assistance for building pucca house.",
    description: "Pucca house with basic amenities for rural families.",
    eligibility: { minAge: 18, noExistingPuccaHouse: true, annualIncomeCap: 300000 },
    dbtRequired: true, link: "https://pmayg.nic.in/"
  },
  {
    id: 5, title: "PM Ujjwala Yojana 2.0", hindiTitle: "प्रधानमंत्री उज्ज्वला योजना",
    category: "Energy", icon: "🔥",
    benefit: "Free LPG connection + first refill + stove for rural women.",
    description: "Clean cooking fuel for rural women from economically weaker households.",
    eligibility: { gender: "F", annualIncomeCap: 200000, bplCard: true },
    dbtRequired: true, link: "https://www.pmuy.gov.in/"
  },
  {
    id: 6, title: "Kisan Credit Card (KCC)", hindiTitle: "किसान क्रेडिट कार्ड",
    category: "Credit", icon: "💳",
    benefit: "Subsidized farm credit up to ₹3 Lakh at effectively 4% interest.",
    description: "Affordable short-term loans for agriculture, fisheries, animal husbandry.",
    eligibility: { minAge: 18, occupation: ["farmer", "fisherman", "dairy"], landRequired: true },
    dbtRequired: false, link: "https://www.myscheme.gov.in/schemes/kcc"
  },
  {
    id: 7, title: "MGNREGA", hindiTitle: "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम",
    category: "Employment", icon: "🏗️",
    benefit: "100 days guaranteed employment at ₹267/day wage.",
    description: "Legal guarantee of 100 days employment per rural household per year.",
    eligibility: { minAge: 18, residence: "rural", jobCard: true },
    dbtRequired: true, link: "https://nrega.nic.in/"
  },
  {
    id: 8, title: "Sukanya Samriddhi Yojana", hindiTitle: "सुकन्या समृद्धि योजना",
    category: "Education", icon: "👧",
    benefit: "8.2% annual interest on girl child savings account.",
    description: "High-interest savings scheme for girl child education & marriage.",
    eligibility: { gender: "F", maxAge: 10, forGirlChild: true },
    dbtRequired: false, link: "https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89"
  }
];

// GET /api/schemes
router.get("/", (req, res) => {
  const { category } = req.query;
  let data = schemesData;
  if (category && category !== "all") {
    data = data.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ success: true, data, count: data.length });
});

// POST /api/schemes/match — AI-based eligibility matching
router.post("/match", (req, res) => {
  const { age, gender, occupation, annualIncome, hasLand, hasBplCard, hasGirlChild } = req.body;

  const matched = [];
  const partial = [];

  schemesData.forEach(scheme => {
    const e = scheme.eligibility;
    let score = 0;
    let maxScore = 0;

    if (e.minAge !== undefined) { maxScore++; if (parseInt(age) >= e.minAge) score++; }
    if (e.maxAge !== undefined) { maxScore++; if (parseInt(age) <= e.maxAge) score++; }
    if (e.gender !== undefined) { maxScore++; if (gender === e.gender || (gender === "M" && e.gender !== "F")) score++; }
    if (e.occupation && e.occupation.length > 0) {
      maxScore++;
      if (e.occupation.some(o => (occupation || "").toLowerCase().includes(o))) score++;
    }
    if (e.annualIncomeCap !== undefined) {
      maxScore++;
      if (parseInt(annualIncome) <= e.annualIncomeCap) score++;
    }
    if (e.landRequired) { maxScore++; if (hasLand) score++; }
    if (e.bplCard) { maxScore++; if (hasBplCard) score++; }
    if (e.forGirlChild) { maxScore++; if (hasGirlChild) score++; }

    const pct = maxScore > 0 ? (score / maxScore) : 1;
    if (pct >= 0.8) matched.push({ ...scheme, matchScore: Math.round(pct * 100) });
    else if (pct >= 0.5) partial.push({ ...scheme, matchScore: Math.round(pct * 100) });
  });

  res.json({ success: true, matched, partial, total: matched.length + partial.length });
});

module.exports = router;
