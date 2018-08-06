const router = require('express').Router();
const passport = require('passport');

// auth Login
router.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});
// auth Loggout
router.get('/logout', (req, res) => {
  // res.send('logging out');
  req.logout();
  res.redirect('/');
});

// Google auth
router.get('/google', passport.authenticate('google', {
  scope: ['profile'] // getting inf from google+
}));

// callback after successfull callback
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  res.redirect('/profile');
});

module.exports = router;
