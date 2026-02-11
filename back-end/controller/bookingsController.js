const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const Booking = require("../models/bookings");
const conn = require("../db.js")
const app = express();

dotenv.config();                                                                                                 

exports.getAllNotifications = async (req, res) =>
{
    try 
    {                   
        const query = {"status": "notification"}
        const result = await Booking.find(query);

        return res.status(201).json(result);          
    }
    catch(error) 
    {
        console.error('Query error: ', error);
        return res.status(500).json({ error: error.message });       
    }

}