const mongoose = require("mongoose");

const returnSchema = new mongoose.Schema({
    order: String,
    reason: String
});

module.exports = mongoose.model("ReturnReq", returnSchema);
