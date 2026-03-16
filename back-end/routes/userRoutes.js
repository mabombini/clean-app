const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/addNewUser', userController.createNewUser);
router.post('/checkEmail', userController.checkEmail);
module.exports = router;
