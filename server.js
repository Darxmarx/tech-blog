// import npm packages
const path = require('path');
const express = require('express');

// import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

// initialize express, have app listen on specific port
const app = express();
const PORT = process.env.PORT || 3001;

// set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 60 * 60 * 1000
  }
};

// use said session
app.use(session(sess));

// enable handlebars
const hbs = exphbs.create({ helpers });

// initalize handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set up json objects and urlencoded for requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// use routes for modularity
app.use(routes);

// set up sequelize to listen
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
