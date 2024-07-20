const Payment = require('../models/Payment');
const Balance = require('../models/Balance');
const Customer = require('../models/Customer');
const { sms } = require('../config/africaTalkConfig');

// Record a payment
exports.recordPayment = async (req, res) => {
  try {
    const { customerId, amount } = req.body;
    const payment = new Payment({ customerId, amount });
    await payment.save();

    // Update balance
    const balance = await Balance.findOne({ customerId });
    if (balance) {
      balance.balance += amount;
      await balance.save();
    } else {
      await new Balance({ customerId, balance: amount }).save();
    }

    // Notify customer of payment
    const customer = await Customer.findById(customerId);
    if (customer) {
      sms.send({
        to: customer.phone,
        message: `Your payment of ${amount} has been received. Your new balance is ${balance.balance}.`,
      });
    }

    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
