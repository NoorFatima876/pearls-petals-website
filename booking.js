// models/booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    product: String,
    price: String
});

module.exports = mongoose.model("Booking", bookingSchema);
