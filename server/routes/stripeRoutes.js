const keys = require("../config/keys.js");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin.js");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => { // calls requireLogin to authenticate user
    // Stripe charge is finalised by reaching out to Stripe's API to handle authentication token
    const charge = await stripe.charges.create({
      amount: 500, // amount denominated in USD cents
      currency: "USD",
      description: "$5 for 5 credits",
      source: req.body.id
    });

    // After Stripe charge is finalised, number of credits is updated for user
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
