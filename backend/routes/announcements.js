// =============================================================
// ANNOUNCEMENTS ROUTES
// =============================================================
const router = require("express").Router();
const Announcement = require("../models/Announcement");

let inMemoryAnn = [];
const isMongoConnected = () => {
  try { return require("mongoose").connection.readyState === 1; } catch { return false; }
};

router.get("/", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const data = await Announcement.find().sort({ createdAt: -1 });
      res.json({ success: true, data });
    } else {
      res.json({ success: true, data: inMemoryAnn });
    }
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post("/", async (req, res) => {
  try {
    const annData = {
      ...req.body,
      id: "ANN-" + (500 + Math.floor(Math.random() * 9000)),
      createdAt: new Date()
    };
    if (isMongoConnected()) {
      const ann = await Announcement.create(annData);
      res.status(201).json({ success: true, data: ann });
    } else {
      inMemoryAnn.unshift(annData);
      res.status(201).json({ success: true, data: annData });
    }
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.delete("/:id", async (req, res) => {
  try {
    if (isMongoConnected()) {
      await Announcement.findOneAndDelete({ id: req.params.id });
    } else {
      inMemoryAnn = inMemoryAnn.filter(a => a.id !== req.params.id);
    }
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
