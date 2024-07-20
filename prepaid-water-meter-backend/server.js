const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Import routes
const meterRoutes = require('./routes/meterRoutes');
const readingRoutes = require('./routes/readingRoutes');
const balanceRoutes = require('./routes/balanceRoutes');
const customerRoutes = require('./routes/customerRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// Use routes
app.use('/api/meters', meterRoutes);
app.use('/api/readings', readingRoutes);
app.use('/api/balances', balanceRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 27017;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
