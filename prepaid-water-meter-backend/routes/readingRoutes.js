const express = require('express');
const router = express.Router();
const readingController = require('../controllers/readingController');

router.post('/generate', readingController.generateReading);
router.post('/manual-entry', readingController.manualEntry);

module.exports = router;
