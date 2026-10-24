// =============================================================
// DBT TRAFFIC LIGHT CHECKER ROUTES
// =============================================================
const router = require("express").Router();

// Simulated DBT status database
// In production: integrate with UIDAI / NPCI DBT APIs
const dbtStatusDB = new Map([
  ["VID-7842", { aadhaarLinked: true, dbtEnabled: true }],
  ["VID-3921", { aadhaarLinked: true, dbtEnabled: false }],
  ["VID-ADM01", { aadhaarLinked: true, dbtEnabled: true }],
  ["VID-DOC01", { aadhaarLinked: false, dbtEnabled: false }],
]);

/**
 * GET /api/dbt/status?userId=VID-7842
 * Returns DBT Traffic Light status:
 *   🔴 RED    = Aadhaar NOT linked
 *   🟡 YELLOW = Aadhaar linked but DBT NOT seeded to bank
 *   🟢 GREEN  = DBT Active — receiving direct transfers
 */
router.get("/status", (req, res) => {
  const { userId, aadhaar } = req.query;

  // Demo: simulate lookup
  let record = null;
  if (userId && dbtStatusDB.has(userId)) {
    record = dbtStatusDB.get(userId);
  } else {
    // Random simulation for unknown users
    const r = Math.random();
    record = {
      aadhaarLinked: r > 0.3,
      dbtEnabled: r > 0.6
    };
  }

  let trafficLight, message, color, steps;

  if (!record.aadhaarLinked) {
    trafficLight = "RED";
    color = "#ef4444";
    message = "Aadhaar is NOT linked to your bank account. You cannot receive DBT benefits.";
    steps = [
      "Visit your nearest bank branch with Aadhaar card",
      "Fill Aadhaar seeding form (Form 1)",
      "Bank will update within 24–48 hours",
      "Confirm via SMS or bank passbook"
    ];
  } else if (!record.dbtEnabled) {
    trafficLight = "YELLOW";
    color = "#f59e0b";
    message = "Aadhaar is linked but DBT (Direct Benefit Transfer) is NOT yet enabled on your account.";
    steps = [
      "Visit bank and ask for 'DBT Activation'",
      "Link your mobile number to Aadhaar (mAadhaar app or UID center)",
      "Activate NPCI mapper via bank's mobile app",
      "Check status at https://resident.uidai.gov.in/"
    ];
  } else {
    trafficLight = "GREEN";
    color = "#22c55e";
    message = "🎉 DBT is fully active! You will receive PM-Kisan, MGNREGA, and all government payments directly in your bank account.";
    steps = [
      "Your Aadhaar is linked ✅",
      "DBT is enabled on your account ✅",
      "You are eligible for all direct benefit transfers ✅",
      "Keep mobile number linked to receive SMS alerts"
    ];
  }

  res.json({
    success: true,
    userId: userId || "UNKNOWN",
    trafficLight,
    color,
    message,
    steps,
    aadhaarLinked: record.aadhaarLinked,
    dbtEnabled: record.dbtEnabled,
    checkedAt: new Date().toISOString()
  });
});

// POST /api/dbt/update — update DBT status (simulated admin action)
router.post("/update", (req, res) => {
  const { userId, aadhaarLinked, dbtEnabled } = req.body;
  if (!userId) return res.status(400).json({ error: "userId required" });
  dbtStatusDB.set(userId, { aadhaarLinked, dbtEnabled });
  res.json({ success: true, message: "DBT status updated" });
});

module.exports = router;
