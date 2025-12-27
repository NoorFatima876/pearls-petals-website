const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    name: String,
    issue: String
});

module.exports = mongoose.model("Complaint", complaintSchema);
