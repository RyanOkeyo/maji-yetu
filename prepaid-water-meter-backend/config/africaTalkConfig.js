const africastalking = require('africastalking');
require('dotenv').config();

// Initialize Africa's Talking SDK
const africastalkingConfig = africastalking.initialize(process.env.AFRICA_TALK_API_KEY);
const sms = africastalkingConfig.SMS;

module.exports = { sms };
