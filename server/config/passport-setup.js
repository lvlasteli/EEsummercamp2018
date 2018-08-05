const passport = require('passport');
const GooglePassport = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  console.log('serialize');
  done(null, user.userId);
  // cookie
});
passport.deserializeUser((googleId, done) => {
  User.findById(googleId).then((user) => {
    console.log('deserialize');
    done(null, user);
  });
});

passport.use(new GooglePassport({
  // options
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: '/auth/google/redirect'

}, (accessToken, refreshToken, profile, done) => {
  // pasport callback when we get profile infomartion
  // poziva se na router.get('/google/redirect', >>>passport.authenticate('google'),<<<
  User.findOne({where:
     {googleId: profile.id} }).then((currentUser) => {
    if (currentUser) {
      console.log('User already exists fetching their data...');
      done(null, currentUser);
    } else {
      console.log('Creating new user...');
      User.create({
        gender: profile.gender,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        provider: profile.provider,
        googleId: profile.id,
        thumbnail: profile._json.image.url
      }).then((User) => {
        done(null, User);
      });
    }
  });
}));
