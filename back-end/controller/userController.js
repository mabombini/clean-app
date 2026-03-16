
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const conn = require("../db.js");
const User = require("../models/users");
const app = express();
const bcrypt = require('bcrypt');
const { validateSignUp } = require("../utils/validateInputs.js");


dotenv.config();                                                                                                 

exports.createNewUser = async (req, res) =>
{
    const { name, email, address, password, businessid, role } = req.body;

    const { error } = validateSignUp({ name, email, address, password });

    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try 
    {        
        const response = await User.create({ name: name, email:email, address:address, password: hashedPassword, businessid: businessid, role: role});
        return res.status(201).json();        
    }
    catch(error) 
    {
        console.error('Query error: ', error);
		return res.status(500).json({ error: error.message });       
    }

}

exports.checkEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        res.json({ exists: !!user });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
