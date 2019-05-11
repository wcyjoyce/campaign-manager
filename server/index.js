// Generating Express apps
const express = require("express"); // imports Express package
const passport = require ("passport"); // imports Passport JS package
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys.js");

const app = express(); // initiates a new Express app

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


// Once user enters through specified route (i.e. "/auth/google"), Passport JS is to authenticate user via a strategy called "Google"
// Scope specifies the types of access that is obtained from user's profile
app.get("/auth/google", passport.authenticate(
  "google", {
    scope: ["profile", "email"]
  })
);

// When user gets redirected to "/auth/google/callback", route handler takes user's request and conducts code exchange
app.get("/auth/google/callback", passport.authenticate("google"));

// Initiating Express route handlers
  // 1) app - new route handlers to be registered to this app
  // 2) get - new route handlers will be set up to handle with the "get" request
  // 3) / - watch for incoming requests that are attempting to access a specific route (e.g. localhost:5000)
  // 4) req - represents the incoming request
  // 5) res - represents the outgoing response
  // 6) res.send - close the request and send back a JSON response
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Instructs Express to tell Node to listen to incoming traffic on Port 5000
// app.listen(5000);

// Heroku setup: identifies which port that Heroku has assigned; otherwise (if in development mode, assign to port 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
