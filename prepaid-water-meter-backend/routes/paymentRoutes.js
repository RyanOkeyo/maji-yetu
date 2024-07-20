const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/record', paymentController.recordPayment);

module.exports = router;
