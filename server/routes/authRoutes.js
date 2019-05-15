const passport = require("passport"); // imports original PassportJS NPM module

module.exports = (app) => {
  // Once user enters through specified route (i.e. "/auth/google"), Passport JS is to authenticate user via a strategy called "Google"
  // Scope specifies the types of access that is obtained from user's profile
  app.get("/auth/google", passport.authenticate(
    "google", {
      scope: ["profile", "email"]
    })
  );

  // When user gets redirected to "/auth/google/callback", route handler takes user's request and conducts code exchange
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys"); // redirects user to /surveys after signing in
    }
  );

  // Testing authentication to ensure that cookies has been set up
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  // Logging out
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user); // should return empty state as user is now logged out
  });
};
