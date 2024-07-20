const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/add', customerController.addCustomer);
router.put('/edit/:id', customerController.editCustomer);
router.delete('/delete/:id', customerController.deleteCustomer);

module.exports = router;
