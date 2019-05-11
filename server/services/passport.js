const passport = require ("passport"); // imports Passport JS package
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys.js");

// User OAuth handled by Passport JS
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback" // route that user is redirected to when he/she grants authorisation
  }, (accessToken, refreshToken, profile, done) => {
    console.log("access token:", accessToken);
    console.log("refresh token:", refreshToken);
    console.log("profile:", profile);
  })
);
