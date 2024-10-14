const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import the connection object and routes
const sequelize = require('./config/connection');
const routes = require('./controllers');

// Import helpers for Handlebars (if you have any)
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up session with Sequelize store
const sess = {
  secret: 'Super secret secret',  // Replace this with an actual secret
  cookie: {
    // Session expires in 10 minutes (600,000 milliseconds)
    maxAge: 600000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set up Handlebars.js as the view engine and pass helpers
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in the controllers folder
app.use(routes);

// Sync the Sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});
