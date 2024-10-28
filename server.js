const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const routes = require('./routes');

// Initialize the app and define a port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware (optional, can be removed if not needed)
app.use(session({
  secret: 'mysecretkey',  // Change this to an environment variable in production
  resave: false,
  saveUninitialized: true,
}));

// Serve a basic welcome message or redirect at the root
app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API'); // Or redirect('/api/users')
});

// Set up routes
app.use(routes);

// MongoDB connection (replace 'socialNetworkDB' with your DB name)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log Mongo queries being executed
mongoose.set('debug', true);

// Start the server
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
