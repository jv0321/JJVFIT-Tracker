const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController'); // Correctly import the controller functions
const router = express.Router();

// POST route to create a user
router.post('/create', createUser);

// GET route to get a user by id
router.get('/:id', getUser);

// PUT route to update user data
router.put('/:id', updateUser);

// DELETE route to delete a user
router.delete('/:id', deleteUser);

module.exports = router;
