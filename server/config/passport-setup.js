const passport = require('passport');
const GooglePassport = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.userId);
  // radimo cookie
});
passport.deserializeUser((userId, done) => {
  User.findById(userId).then((user) => {
    done(null, user);
  });
});

passport.use(new GooglePassport({
  // opcije koje smo kreirali
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: '/auth/google/redirect'

}, (accessToken, refreshToken, profile, done) => {
  // pasport callback kada dobijemo profil informacije
  // poziva se na router.get('/google/redirect', >>>passport.authenticate('google'),<<<
  // console.log(profile);
  // provjeri jel postoji user u database
  User.findOne({googleId: profile.id}).then((currentUser) => {
    if (currentUser) {
      console.log(' VEC POSTOJI');
      done(null, currentUser);
    } else {
      console.log('Radimo novoga');
      // napravimo novog
      User.create({
        gender: profile.gender,
        firstName: profile.name.familyName,
        lastName: profile.name.givenName,
        provider: profile.provider,
        googleId: profile.id
      });
      done(null, User);
    }
  });
}));
