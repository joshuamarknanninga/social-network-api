// controllers/index.js

const router = require('express').Router();

// Import route modules
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Mount the imported routes
router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Fallback Route
router.use((req, res) => {
  res.status(404).send('404: Page Not Found');
});

module.exports = router;
