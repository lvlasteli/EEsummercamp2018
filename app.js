const express = require('express');
const app = express();
const authRouthes = require('./routes/auth-routes');
const Sequelize = require('sequelize');
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
// ^kod koji pokrece skriptu passport-setup prilikom startanja aplikacije

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

// View engine
app.set('view engine', 'ejs');

// routes kad budemo koristili google pisat ce /auth/google
app.use('/auth', authRouthes);
// Create home page
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app now listening for requests on port 3000');
});
console.log(passportSetup);
