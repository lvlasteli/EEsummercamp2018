const express = require('express');
const passport = require('passport');
const authRouthes = require('./routes/auth-routes');
const Sequelize = require('sequelize');
const keys = require('./server/config/keys');
// const path = require('path');
const cookieSession = require('cookie-session');
const passportSetup = require('./server/config/passport-setup');
// ^kod koji pokrece skriptu passport-setup prilikom startanja aplikacije

const app = express();

// View engine
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // zelimo da cookie traje 1dan=h*m*s*ms
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

// routes kad budemo koristili google pisat ce /auth/google
app.use('/auth', authRouthes);
// Create home page
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});
console.log(passportSetup);// bezveze da ne pise da se ne koristi

// ako javlja error za listening porta netstat -vanp tcp | grep 3000
// kill -9 <pid>
