// server.js
require('dotenv').config();

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const { SequelizeStore } = require('connect-session-sequelize');

const sequelize = require('./config/connection');
const routes = require('./controllers');

// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET || 'Super secret secret',
  cookie: {
    maxAge: 600000,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// // const hbs = exphbs.create({ helpers });
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Now listening on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
