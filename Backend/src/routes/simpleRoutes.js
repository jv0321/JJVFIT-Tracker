// routes/simpleRoutes.js
const express = require('express');
const router = express.Router();
const simpleController = require('../controllers/simpleController');

// Define route for "/hello"
router.get('/hello', simpleController.getHelloWorld);

module.exports = router;
