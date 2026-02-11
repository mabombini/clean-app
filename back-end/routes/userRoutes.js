const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/addNewUser', userController.createNewUser);

module.exports = router;
