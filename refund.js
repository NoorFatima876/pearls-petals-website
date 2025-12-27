const mongoose = require("mongoose");

const refundSchema = new mongoose.Schema({
    order: String,
    reason: String
});

module.exports = mongoose.model("Refund", refundSchema);
