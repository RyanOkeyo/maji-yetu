const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  balance: { type: Number, required: true },
});

const Balance = mongoose.model('Balance', balanceSchema);

module.exports = Balance;
