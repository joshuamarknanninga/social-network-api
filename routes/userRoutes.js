const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controllers/userControllers');

// Set up routes for users
router.get('/', getAllUsers); // Get all users
router.get('/:userId', getUserById); // Get user by ID
router.post('/', createUser); // Create new user
router.put('/:userId', updateUserById); // Update user by ID
router.delete('/:userId', deleteUserById); // Delete user by ID

module.exports = router;
