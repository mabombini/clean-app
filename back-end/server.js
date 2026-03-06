const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users");
const conn = require("./db.js");
const userRoutes = require("./routes/userRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes")
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const startServer = async () => {
  await conn();
}

PORT = process.env.PORT || 3000;

app.use('/users', userRoutes);
app.use('/bookings', bookingRoutes);
app.use('/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//starts connection with MongoDB
startServer();

module.exports = app;