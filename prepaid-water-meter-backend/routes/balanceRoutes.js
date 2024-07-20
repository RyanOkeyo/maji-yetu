const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

router.put('/manage', balanceController.manageBalance);
router.post('/shut-off', balanceController.shutOffMeter);

module.exports = router;
