const express = require('express');
const router = express.Router();
const BookingController = require('../controller/bookingsController');

router.get('/getAllNotifications', BookingController.getAllNotifications);

module.exports = router;
