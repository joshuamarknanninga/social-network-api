const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThoughtById, deleteThoughtById } = require('../controllers/thoughtController');

// Set up routes for thoughts
router.get('/', getAllThoughts); // Get all thoughts
router.get('/:thoughtId', getThoughtById); // Get thought by ID
router.post('/', createThought); // Create new thought
router.put('/:thoughtId', updateThoughtById); // Update thought by ID
router.delete('/:thoughtId', deleteThoughtById); // Delete thought by ID

module.exports = router;
