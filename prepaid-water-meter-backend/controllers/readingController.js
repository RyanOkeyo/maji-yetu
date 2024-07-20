const Reading = require('../models/Reading');
const Meter = require('../models/Meter');

// Generate a meter reading
exports.generateReading = async (req, res) => {
  try {
    const { meterId, reading } = req.body;
    const newReading = new Reading({ meterId, reading });
    await newReading.save();
    res.status(201).json(newReading);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Manual entry of readings
exports.manualEntry = async (req, res) => {
  try {
    const { meterId, reading } = req.body;
    const newReading = new Reading({ meterId, reading });
    await newReading.save();
    res.status(201).json(newReading);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
