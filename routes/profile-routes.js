const router = require('express').Router();

const CkeckIfLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
};
router.get('/', CkeckIfLogged, (req, res) => {
  // res.send(req.user.firstName + ' ' + req.user.lastName + ' are logged in');
  res.render('profile', {user: req.user});
});

module.exports = router;
