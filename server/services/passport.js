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
      callbackURL: "/auth/google/callback", // route that user is redirected to when he/she grants authorisation
      proxy: true // enables Google to trust proxy and handle callback URL accordingly (ie. HTTP/HTTPS)
    },

    // #1: Promise
    // (accessToken, refreshToken, profile, done) => {
    //   console.log("profile:", profile);

    //   // searches in User for the first record where googleId === profile.id
    //   User.findOne({ googleId: profile.id }).then(existingUser => {
    //     if (existingUser) {
    //       done(null, existingUser); // no action required as there is an existing record of the given profile ID
    //     } else {
    //       new User({ googleId: profile.id })
    //         .save()
    //         .then(user => done(null, user));
    //     }
    //   })
    // }

    // #2: Refactoring with Async/Await
    async (accessToken, refreshToken, profile, done) => {
      console.log("profile:", profile);
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);

// Serialises the newly generated user (from above function) with some unique identifier and sets cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialises user by taking the same unique identifier in cookie and converts it back to a Mongoose model instance
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
