const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Models
const Booking = require("./models/booking");
const Contact = require("./models/contact");
const Complaint = require("./models/complaint");
const Feedback = require("./models/feedback");
const ReturnReq = require("./models/return");
const Refund = require("./models/refund");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Connect MongoDB (fixed for Mongoose v7+)
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// ===== ROUTES =====

// Booking
app.post("/booking", async (req, res) => {
  try {
    await Booking.create(req.body);
    res.json({ message: "Booking Saved Successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Contact
app.post("/contact", async (req, res) => {
  try {
    await Contact.create(req.body);
    res.json({ message: "Contact Saved Successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Complaint
app.post("/complaint", async (req, res) => {
  try {
    await Complaint.create(req.body);
    res.json({ message: "Complaint Submitted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Feedback
app.post("/feedback", async (req, res) => {
  try {
    await Feedback.create(req.body);
    res.json({ message: "Feedback Stored!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Return
app.post("/return", async (req, res) => {
  try {
    await ReturnReq.create(req.body);
    res.json({ message: "Return Request Recorded!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Refund
app.post("/refund", async (req, res) => {
  try {
    await Refund.create(req.body);
    res.json({ message: "Refund Query Submitted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Test endpoint
app.get("/", (req, res) => res.send("Server is running ✔"));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running → http://localhost:${PORT}`));
