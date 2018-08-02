const router = require('express').Router();
const passport = require('passport');

// auth Login
router.get('/login', (req, res) => {
  res.render('login');
});

// Autentikacija s googleom
router.get('/google', passport.authenticate('google', {
  scope: ['profile'] // zelim inf od profila od google+
}));
// google ode pokrece GooglePassport i otvara predlozak

// callback nakon uspjesne autentikacije
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
});

// auth Loggout
router.get('/logout', (req, res) => {
  res.send('logging out');
});
module.exports = router; // exportamo ga da ga mozemo koristi u app.js
