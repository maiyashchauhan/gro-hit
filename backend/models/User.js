const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, unique: true, trim: true },
  userId: { type: String, unique: true },
  role: { type: String, enum: ["villager", "health", "admin", "guest"], default: "villager" },
  village: { type: String, default: "" },
  district: { type: String, default: "" },
  state: { type: String, default: "" },
  language: { type: String, default: "hi" }, // preferred language
  aadhaarLinked: { type: Boolean, default: false },
  dbtEnabled: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiry: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

// Auto-generate userId before save
UserSchema.pre("save", function(next) {
  if (!this.userId) {
    this.userId = "VID-" + Math.floor(1000 + Math.random() * 9000);
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
