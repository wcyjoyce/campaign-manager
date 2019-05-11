const passport = require ("passport"); // imports Passport JS package
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

// creates a model class called "User"
const User = mongoose.model("users");

// User OAuth handled by Passport JS
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback" // route that user is redirected to when he/she grants authorisation
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("profile:", profile);

      // searches in User for the first record where googleId === profile.id
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser); // no action required as there is an existing record of the given profile ID
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      })
    }
  )
);
