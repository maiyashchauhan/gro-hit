// =============================================================
// ISSUES ROUTES — Village Grievance CRUD
// =============================================================
const router = require("express").Router();
const Issue = require("../models/Issue");
const auth = require("../middleware/auth");

// In-memory fallback when MongoDB is unavailable
let inMemoryIssues = [];

const isMongoConnected = () => {
  try {
    const mongoose = require("mongoose");
    return mongoose.connection.readyState === 1;
  } catch { return false; }
};

// GET /api/issues — list all issues
router.get("/", async (req, res) => {
  try {
    const { status, category, userId } = req.query;
    let filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (userId) filter.userId = userId;

    if (isMongoConnected()) {
      const issues = await Issue.find(filter).sort({ createdAt: -1 });
      res.json({ success: true, data: issues, count: issues.length });
    } else {
      let data = inMemoryIssues;
      if (status) data = data.filter(i => i.status === status);
      if (category) data = data.filter(i => i.category === category);
      res.json({ success: true, data, count: data.length });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/issues/:id
router.get("/:id", async (req, res) => {
  try {
    if (isMongoConnected()) {
      const issue = await Issue.findOne({ id: req.params.id });
      if (!issue) return res.status(404).json({ error: "Issue not found" });
      res.json({ success: true, data: issue });
    } else {
      const issue = inMemoryIssues.find(i => i.id === req.params.id);
      if (!issue) return res.status(404).json({ error: "Issue not found" });
      res.json({ success: true, data: issue });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/issues — create new issue
router.post("/", async (req, res) => {
  try {
    const issueData = {
      ...req.body,
      id: "REP-" + (10000 + Math.floor(Math.random() * 90000)),
      status: "pending",
      createdAt: new Date()
    };

    if (isMongoConnected()) {
      const issue = await Issue.create(issueData);
      res.status(201).json({ success: true, data: issue });
    } else {
      inMemoryIssues.unshift(issueData);
      res.status(201).json({ success: true, data: issueData });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/issues/:id — update issue (admin)
router.patch("/:id", async (req, res) => {
  try {
    const updates = { ...req.body, updatedAt: new Date() };
    if (isMongoConnected()) {
      const issue = await Issue.findOneAndUpdate(
        { id: req.params.id },
        updates,
        { new: true }
      );
      if (!issue) return res.status(404).json({ error: "Issue not found" });
      res.json({ success: true, data: issue });
    } else {
      const idx = inMemoryIssues.findIndex(i => i.id === req.params.id);
      if (idx === -1) return res.status(404).json({ error: "Issue not found" });
      inMemoryIssues[idx] = { ...inMemoryIssues[idx], ...updates };
      res.json({ success: true, data: inMemoryIssues[idx] });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/issues/:id
router.delete("/:id", async (req, res) => {
  try {
    if (isMongoConnected()) {
      await Issue.findOneAndDelete({ id: req.params.id });
    } else {
      inMemoryIssues = inMemoryIssues.filter(i => i.id !== req.params.id);
    }
    res.json({ success: true, message: "Issue deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
