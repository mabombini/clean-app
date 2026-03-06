const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/users");
const conn = require("../db.js")
const app = express();
const jwt = require("jsonwebtoken");
const users = require("../models/users");
const SECRET_KEY = process.env.SECRET_KEY;

dotenv.config();

exports.login = async (req, res) =>
{
    const { email, password } = req.body;

    try
    {
        const user = await User.findOne( { email })

        if (!user || user.password !== password)
        {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ name: user.name, email: user.email, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
        return res.status(200).json({ token, userRole: user.role });
    }
    catch (error)
    {
        res.status(500).json({ message: error });
    }
}

exports.authentication = async (req, res) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader ? authHeader.split(" ")[1] : null;

    if(!token) 
        return res.status(401).json({ message: "No token provided" });

    
     try {
        const decoded = jwt.verify(token, SECRET_KEY);

        return res.status(200).json({
            message: "Authenticated",
            user: decoded
        });

    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}