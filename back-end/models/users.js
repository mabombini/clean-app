const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    password: { type: String, required: true },
    businessid: { type: String },
    role: { type: String, enum: ['admin', 'client', 'staff'], default: 'client' }
});


module.exports = mongoose.model("User", userSchema);