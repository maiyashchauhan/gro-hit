const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  title: { type: String, required: true },
  details: { type: String, required: true },
  authorRole: { type: String, enum: ["admin", "health", "government"], default: "admin" },
  authorName: { type: String },
  date: { type: String },
  priority: { type: String, enum: ["high", "normal", "low"], default: "normal" },
  audio: { type: String, default: "" },
  video: { type: String, default: "" },
  languages: { type: Map, of: String }, // translated versions
  createdAt: { type: Date, default: Date.now }
});

AnnouncementSchema.pre("save", function(next) {
  if (!this.id) {
    this.id = "ANN-" + (500 + Math.floor(Math.random() * 9000));
  }
  next();
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
