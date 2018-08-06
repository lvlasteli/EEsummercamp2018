const express = require('express');
const passport = require('passport');
const authRouthes = require('./server/routes/auth-routes');
const profileRoutes = require('./server/routes/profile-routes');
const Sequelize = require('sequelize');
const keys = require('./server/config/keys');
// const path = require('path');
const cookieSession = require('cookie-session');
const passportSetup = require('./server/config/passport-setup');

const app = express();

// View engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // cookie lasts 1day=h*m*s*ms
  keys: [keys.session.cookiekey]
}));
app.use(passport.initialize());
app.use(passport.session());

const sequelize = new Sequelize('nikolovska', 'postgres', keys.postgreSQL.password, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// routes -> /auth/google and  /profile
app.use('/auth', authRouthes);
app.use('/profile', profileRoutes);

// Create home page
app.get('/', (req, res) => {
  res.render('home', {user: req.user});
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});
console.log(passportSetup);
