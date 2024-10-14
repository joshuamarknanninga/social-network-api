const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController'); // Ensure the path is correct

// GET all thoughts & POST create a thought
router.route('/')
  .get(getThoughts)
  .post(createThought);

// GET, PUT, DELETE single thought
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// POST & DELETE reactions to/from a thought
router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
