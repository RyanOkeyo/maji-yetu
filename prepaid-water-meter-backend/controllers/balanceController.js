const Balance = require('../models/Balance');
const Meter = require('../models/Meter');
const { sms } = require('../config/africaTalkConfig');

// Manage customer balance
exports.manageBalance = async (req, res) => {
  try {
    const { customerId, balance } = req.body;
    const updatedBalance = await Balance.findOneAndUpdate({ customerId }, { balance }, { new: true });
    if (!updatedBalance) return res.status(404).json({ error: 'Balance not found' });
    
    // Notify if balance is low
    if (balance < 10) {
      const customer = await Customer.findById(customerId);
      if (customer) {
        sms.send({
          to: customer.phone,
          message: 'Your prepaid balance is low. Please top up soon.',
        });
      }
    }

    res.json(updatedBalance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Automatically shut off meter
exports.shutOffMeter = async (req, res) => {
  try {
    const { customerId } = req.body;
    const balance = await Balance.findOne({ customerId });
    
    if (balance && balance.balance <= 0) {
      await Meter.updateMany({ customerId }, { $set: { status: 'off' } });
      res.json({ message: 'Meter shut off successfully' });
    } else {
      res.status(400).json({ error: 'Balance is not zero' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
