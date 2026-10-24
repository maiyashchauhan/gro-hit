const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  category: { type: String, required: true },
  categoryName: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  gps: {
    lat: Number,
    lng: Number
  },
  status: { type: String, enum: ["pending", "in_progress", "resolved", "rejected"], default: "pending" },
  userId: { type: String },
  userName: { type: String },
  userPhone: { type: String },
  photo: { type: String, default: "" }, // Cloudinary URL
  contractor: { type: String, default: "" },
  budget: { type: String, default: "" },
  adminNotes: { type: String, default: "" },
  language: { type: String, default: "en" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

IssueSchema.pre("save", function(next) {
  if (!this.id) {
    this.id = "REP-" + (10000 + Math.floor(Math.random() * 90000));
  }
  next();
});

module.exports = mongoose.model("Issue", IssueSchema);
