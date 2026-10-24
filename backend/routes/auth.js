// =============================================================
// AUTH ROUTES — Phone OTP Login + JWT
// =============================================================
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "grohit_secret";
const OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

// Simulated OTP store (use Redis in production)
const otpStore = new Map();

// POST /api/auth/send-otp
router.post("/send-otp", async (req, res) => {
  try {
    const { phone, name, role = "villager" } = req.body;
    if (!phone || phone.length < 10) {
      return res.status(400).json({ error: "Valid 10-digit phone number required" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = Date.now() + OTP_EXPIRY_MS;

    // Store OTP (in production: send via Twilio/MSG91)
    otpStore.set(phone, { otp, expiry, name, role });

    // For demo: log OTP to console (replace with SMS in production)
    console.log(`📱 OTP for ${phone}: ${otp} (expires in 5 min)`);

    res.json({
      success: true,
      message: "OTP sent successfully",
      // REMOVE demo_otp in production:
      demo_otp: otp,
      hint: "In production, OTP is sent via SMS. For demo, use the demo_otp field."
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/verify-otp
router.post("/verify-otp", async (req, res) => {
  try {
    const { phone, otp, name, role = "villager", language = "hi" } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({ error: "Phone and OTP required" });
    }

    const stored = otpStore.get(phone);

    // For demo: accept "123456" as universal OTP
    const isDemoOtp = otp === "123456";
    const isValidOtp = stored && stored.otp === otp && Date.now() < stored.expiry;

    if (!isDemoOtp && !isValidOtp) {
      return res.status(401).json({ error: "Invalid or expired OTP" });
    }

    otpStore.delete(phone);

    // Find or create user
    let user = await User.findOne({ phone }).catch(() => null);
    if (!user) {
      try {
        user = await User.create({
          name: name || stored?.name || "ग्रामीण",
          phone,
          role: role || stored?.role || "villager",
          language
        });
      } catch {
        // MongoDB not available — create mock user
        user = {
          userId: "VID-" + Math.floor(1000 + Math.random() * 9000),
          name: name || "ग्रामीण",
          phone,
          role: role || "villager",
          language
        };
      }
    }

    const token = jwt.sign(
      { userId: user.userId || user._id, phone, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      success: true,
      token,
      user: {
        userId: user.userId,
        name: user.name,
        phone: user.phone,
        role: user.role,
        language: user.language
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/auth/me — get current user from token
router.get("/me", require("../middleware/auth"), async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.user.phone })
      .select("-otp -otpExpiry").catch(() => null);
    res.json({ success: true, user: user || req.user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
