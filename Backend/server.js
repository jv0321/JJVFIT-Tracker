const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');  // Import user routes

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Use the routes from userRoutes.js
app.use('/users', userRoutes);  // Prefix all routes with /users

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
