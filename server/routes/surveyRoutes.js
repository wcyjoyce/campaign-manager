const mongoose = require("mongoose"); // requiring Mongoose to access Mongoose model classes
const requireLogin = require("../middlewares/requireLogin.js"); // to make sure user is logged in
const requireCredits = require("../middlewares/requireCredits.js"); // to make sure that user has enough credits

// Importing mailer and email templates
const Mailer = require("../services/mailer.js");
const template = require("../services/templates/template.js");

const Survey = mongoose.model("surveys");

module.exports = app => {
  // redirect user to new route with new message after feedback is submitted
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for the feedback!");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title, // ES2016 - title: title
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })), // email is now an array of objects instead of an array of strings
      _user: req.user.id, // autogenerated by Mongoose in MongoDB
      dateSent: Date.now()
    });

    // send email after survey has been created
    const mailer = new Mailer(survey, template(survey));

    try { // try block: catches any requests and sends back a response
      await mailer.send();
      await survey.save();
      req.user.credits -= 1; // deduct credits after email has been sent
      const user = await req.user.save();
      res.send(user); // send back user model with updated number of credits
    } catch (error) {
      res.status(422).send(error); // error 422: user request is incorrect
    };
  });
};
