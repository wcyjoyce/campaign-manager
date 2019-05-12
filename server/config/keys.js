// 1. Determine whether server is in development/production
// 2. Return corresponding set of keys depending on which mode server is in

if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod.js"); // Heroku's default settings: production
} else {
  module.exports = require("./dev.js"); // local default settings: development
};
