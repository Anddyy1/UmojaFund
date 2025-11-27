const mongoose = require('mongoose');
const colors = require('colors'); // <-- Added for colored logs

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // No deprecated options
      serverSelectionTimeoutMS: 10000, // Retry timeout
      retryWrites: true,               // Safe retry
    });

    console.log('✔ MongoDB connected successfully'.green.bold);
  } catch (err) {
    console.error(`✖ MongoDB connection error: ${err.message}`.red.bold);

    // Safe retry logic (non-breaking)
    console.log('Retrying connection in 5 seconds...'.yellow);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
