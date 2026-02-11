const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/users");
const conn = require("../db.js")
const app = express();
const jwt = require("jsonwebtoken");
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

        const token = jwt.sign({ email, password }, SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({ token: token, user: user });

    }
    catch (error)
    {

    }
}