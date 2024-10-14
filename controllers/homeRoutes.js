// controllers/homeRoutes.js

const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Route: GET /
// Description: Render the homepage with all posts
router.get('/', async (req, res) => {
  try {
    // Fetch all posts along with associated users and comments
    const postData = await Post.findAll({
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, include: [{ model: User, attributes: ['username'] }] },
      ],
    });

    // Serialize data for the template
    const posts = postData.map((post) => post.get({ plain: true }));

    // Render the 'homepage' Handlebars template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in, // Pass session info to the template
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route: GET /login
// Description: Render the login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // Render the 'login' Handlebars template
  res.render('login');
});

// Additional Routes can be defined here

module.exports = router;
