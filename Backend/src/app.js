// app.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const simpleRoutes = require('./routes/simpleRoutes');

// Configure environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Use routes
app.use('/api', simpleRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to JJVFit Tracker API');
});

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
