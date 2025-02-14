const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI
    try {
      const conn = await mongoose.connect(mongoUri);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  
module.exports = connectDB;