const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

module.exports = mongoose;
