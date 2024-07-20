const Meter = require('../models/Meter');

// Add a new meter
exports.addMeter = async (req, res) => {
  try {
    const meter = new Meter(req.body);
    await meter.save();
    res.status(201).json(meter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Edit a meter
exports.editMeter = async (req, res) => {
  try {
    const meter = await Meter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!meter) return res.status(404).json({ error: 'Meter not found' });
    res.json(meter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a meter
exports.deleteMeter = async (req, res) => {
  try {
    const meter = await Meter.findByIdAndDelete(req.params.id);
    if (!meter) return res.status(404).json({ error: 'Meter not found' });
    res.json({ message: 'Meter deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
