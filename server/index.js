// Generating Express apps
const express = require("express"); // imports Express package
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser"); // parses requests and returns property called req.body

const keys = require("./config/keys.js");
require("./services/passport.js");

// Importing models
require("./models/user.js");
require("./models/survey.js");

// Connecting Mongoose to MongoDB
mongoose.connect(keys.mongoURI);

// Initiates a new Express app
const app = express();

// Passes app into BodyParser middleware
app.use(bodyParser.json());

// Enabling cookies via Cookie-Session package
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long the cookie can exist inside the browser before it automatically expires (in millseconds)
    keys: [keys.cookieKey] // key used to encrypt the cookie
  })
);

// Instructs Passport to make use of cookies during user authentication
app.use(passport.initialize());
app.use(passport.session());

// Importing Routes
require("./routes/authRoutes.js")(app);
require("./routes/stripeRoutes.js")(app);
require("./routes/surveyRoutes.js")(app);

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

// For Heroku: Express will serve up production assets (eg. main.js / main.css), otherwise, index.html will be served
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); // Express checks to see if any production assets are on file
  const path = require("path"); // otherwise, index.html will be served
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
};

// Heroku setup: identifies which port that Heroku has assigned; otherwise (if in development mode, assign to port 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Instructs Express to tell Node to listen to incoming traffic on Port 5000
// app.listen(5000);
