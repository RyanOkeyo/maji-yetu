const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
  meterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meter', required: true },
  reading: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;
