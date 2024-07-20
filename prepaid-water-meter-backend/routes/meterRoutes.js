const express = require('express');
const router = express.Router();
const meterController = require('../controllers/meterController');

router.post('/add', meterController.addMeter);
router.put('/edit/:id', meterController.editMeter);
router.delete('/delete/:id', meterController.deleteMeter);

module.exports = router;
