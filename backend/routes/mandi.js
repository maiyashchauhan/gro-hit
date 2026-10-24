// =============================================================
// MANDI PRICES ROUTES
// =============================================================
const router = require("express").Router();

const mandiData = [
  { id: 1, commodity: "Wheat (गेहूं)", category: "Grains", price: 2350, unit: "Quintal", trend: "up", change: "+₹40", icon: "🌾" },
  { id: 2, commodity: "Mustard (सरसों)", category: "Oilseeds", price: 5400, unit: "Quintal", trend: "up", change: "+₹90", icon: "🌿" },
  { id: 3, commodity: "Paddy/Basmati (धान)", category: "Grains", price: 3600, unit: "Quintal", trend: "down", change: "-₹50", icon: "🌾" },
  { id: 4, commodity: "Tomato (टमाटर)", category: "Vegetables", price: 35, unit: "Kg", trend: "down", change: "-₹10", icon: "🍅" },
  { id: 5, commodity: "Potato (आलू)", category: "Vegetables", price: 24, unit: "Kg", trend: "stable", change: "0", icon: "🥔" },
  { id: 6, commodity: "Onion (प्याज)", category: "Vegetables", price: 32, unit: "Kg", trend: "up", change: "+₹4", icon: "🧅" },
  { id: 7, commodity: "Green Chili (हरी मिर्च)", category: "Vegetables", price: 50, unit: "Kg", trend: "stable", change: "0", icon: "🌶️" },
  { id: 8, commodity: "Milk (दूध - Cow/Buffalo)", category: "Dairy", price: 58, unit: "Liter", trend: "stable", change: "0", icon: "🥛" },
  { id: 9, commodity: "Soybean (सोयाबीन)", category: "Oilseeds", price: 4200, unit: "Quintal", trend: "up", change: "+₹60", icon: "🫘" },
  { id: 10, commodity: "Cotton (कपास)", category: "Fibre", price: 6800, unit: "Quintal", trend: "down", change: "-₹100", icon: "🪴" },
  { id: 11, commodity: "Maize (मक्का)", category: "Grains", price: 1980, unit: "Quintal", trend: "stable", change: "0", icon: "🌽" },
  { id: 12, commodity: "Gram/Chana (चना)", category: "Pulses", price: 5600, unit: "Quintal", trend: "up", change: "+₹80", icon: "🫘" }
];

// GET /api/mandi
router.get("/", (req, res) => {
  const { category } = req.query;
  let data = mandiData;
  if (category && category !== "all") {
    data = data.filter(m => m.category.toLowerCase() === category.toLowerCase());
  }
  res.json({
    success: true,
    data,
    lastUpdated: new Date().toISOString(),
    source: "Agmarknet / eNAM India (Simulated)"
  });
});

// GET /api/mandi/categories
router.get("/categories", (req, res) => {
  const cats = [...new Set(mandiData.map(m => m.category))];
  res.json({ success: true, data: cats });
});

module.exports = router;
