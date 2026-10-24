// =============================================================
// GRO-HIT BACKEND — Main Server Entry Point
// Node.js + Express + MongoDB + Gemini AI
// =============================================================

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// =============================================================
// MIDDLEWARE
// =============================================================
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting — protect AI endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: "Too many requests, please try again later." }
});
const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20,
  message: { error: "AI rate limit exceeded. Wait 1 minute." }
});
app.use("/api/", apiLimiter);
app.use("/api/ai/", aiLimiter);

// Serve frontend static files (optional — for production)
app.use(express.static(path.join(__dirname, "..")));

// =============================================================
// DATABASE CONNECTION
// =============================================================
const connectDB = async () => {
  try {
    const mongoOpts = { serverSelectionTimeoutMS: 2500 };
    if (process.env.MONGO_URI && process.env.MONGO_URI !== "mongodb://localhost:27017/grohit") {
      await mongoose.connect(process.env.MONGO_URI, mongoOpts);
      console.log("✅ MongoDB connected:", mongoose.connection.host);
    } else {
      // Try local MongoDB, fallback to in-memory mode
      try {
        await mongoose.connect("mongodb://localhost:27017/grohit", mongoOpts);
        console.log("✅ MongoDB connected: localhost");
      } catch {
        console.log("⚠️  MongoDB not available — running in high-performance in-memory / fallback mode");
        console.log("    Install MongoDB or set MONGO_URI in .env for persistent database.");
      }
    }
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};
connectDB();

// =============================================================
// ROUTES
// =============================================================
app.use("/api/auth",          require("./routes/auth"));
app.use("/api/issues",        require("./routes/issues"));
app.use("/api/announcements", require("./routes/announcements"));
app.use("/api/mandi",         require("./routes/mandi"));
app.use("/api/jobs",          require("./routes/jobs"));
app.use("/api/schemes",       require("./routes/schemes"));
app.use("/api/ai",            require("./routes/ai"));
app.use("/api/dbt",           require("./routes/dbt"));

// =============================================================
// HEALTH CHECK
// =============================================================
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Gro-Hit Rural Support API",
    version: "2.0.0",
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    features: ["AI Assistant", "Multi-Language", "DBT Checker", "Voice Navigation"]
  });
});

// 404 fallback
app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

// Serve index.html for all non-API routes (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ error: "Internal server error", message: err.message });
});

// =============================================================
// START SERVER
// =============================================================
app.listen(PORT, () => {
  console.log(`
🚀 Gro-Hit Backend Server Running
====================================
🌐 URL:      http://localhost:${PORT}
📡 API Base: http://localhost:${PORT}/api
🤖 AI:       http://localhost:${PORT}/api/ai
💾 DB:       ${process.env.MONGO_URI || "mongodb://localhost:27017/grohit"}
====================================
  `);
});

module.exports = app;
