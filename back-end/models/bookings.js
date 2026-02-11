const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    sender_id: { type: String, required: true, unique: true },
    description: { type: String },
    date: { type: Date },
    time: { type: String },
    status: { type: String, default: "notification" }
});


module.exports = mongoose.model("Booking", bookingSchema);