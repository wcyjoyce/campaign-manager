// Generating Express apps
const express = require("express"); // imports Express package
require("./services/passport.js");
// const authRoutes = require("./routes/authRoutes.js");

// Initiates a new Express app
const app = express();

// authRoutes(app);
require("./routes/authRoutes.js")(app);

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

mongoose.connect(keys.mongoURI);

// Heroku setup: identifies which port that Heroku has assigned; otherwise (if in development mode, assign to port 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Instructs Express to tell Node to listen to incoming traffic on Port 5000
// app.listen(5000);
