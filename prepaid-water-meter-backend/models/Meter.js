const mongoose = require('mongoose');

const meterSchema = new mongoose.Schema({
  identifier: { type: String, required: true, unique: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
});

const Meter = mongoose.model('Meter', meterSchema);

module.exports = Meter;
