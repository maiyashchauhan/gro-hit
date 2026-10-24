// =============================================================
// JOBS ROUTES
// =============================================================
const router = require("express").Router();

let jobsData = [
  { id: 1, title: "Tractor & Harvester Driver", contractor: "Ravi Krishi Seva Kendra", location: "Ward 4 / Farm Block C", wage: "₹650 / day + Lunch", skills: "Tractor Driving, Basic maintenance", gender: "any", contact: "9876501234", icon: "🚜" },
  { id: 2, title: "Solar Water Pump Technician", contractor: "Surya Urja Samiti", location: "Village Substation", wage: "₹18,000 / month", skills: "Solar panel cleaning & wiring", gender: "any", contact: "9876505678", icon: "☀️" },
  { id: 3, title: "Anganwadi Kitchen & Care Assistant", contractor: "Gram Bal Vikas Samiti", location: "Primary Anganwadi Center", wage: "₹9,500 / month", skills: "Cooking, Childcare, Hygiene", gender: "F", contact: "9876509999", icon: "👶" },
  { id: 4, title: "Organic Dairy Farm Helper", contractor: "Gau Seva Dairy", location: "East Village Dairy Shed", wage: "₹500 / day", skills: "Cattle care, Milking, Feed prep", gender: "any", contact: "9876511122", icon: "🐄" },
  { id: 5, title: "MGNREGA Road Construction Worker", contractor: "Gram Panchayat", location: "Village Link Roads", wage: "₹267 / day (Guaranteed 100 days)", skills: "Physical Labour", gender: "any", contact: "9876512233", icon: "🏗️" },
  { id: 6, title: "Agri Input Shop Assistant", contractor: "Kisaan Seva Centre", location: "Village Market", wage: "₹8,000 / month", skills: "Basic counting, Seed knowledge", gender: "any", contact: "9876513344", icon: "🌱" }
];

router.get("/", (req, res) => {
  res.json({ success: true, data: jobsData, count: jobsData.length });
});

router.post("/", (req, res) => {
  const job = { id: jobsData.length + 1, ...req.body, icon: "💼" };
  jobsData.unshift(job);
  res.status(201).json({ success: true, data: job });
});

router.delete("/:id", (req, res) => {
  jobsData = jobsData.filter(j => j.id !== parseInt(req.params.id));
  res.json({ success: true });
});

module.exports = router;
