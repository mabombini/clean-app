const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const conn = require("../db.js");
const User = require("../models/users");
const app = express();

dotenv.config();                                                                                                 

exports.createNewUser = async (req, res) =>
{
    const { name, email, address, role } = req.body;
    
    try 
    {        
        const response = await User.create({ name: name, email:email, address:address, role: role});
        return res.status(201).json(response);        
    }
    catch(error) 
    {
        console.error('Query error: ', error);
        await conn.close();
		return res.status(500).json({ error: error.message });       
    }

}