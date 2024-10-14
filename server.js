const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Database connection using async/await
const startServer = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetwork',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('🌍 Connected to MongoDB');

    // Start the server only after connecting to the database
    app.listen(PORT, () => {
      console.log(`🌍 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

startServer();
