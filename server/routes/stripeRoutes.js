const keys = require("../config/keys.js");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    // handle token, reach out to API, finalise charge
    // after charge is finalised, update number of credits for user
    const charge = await stripe.charges.create({
      amount: 500, // amount denominated in USD cents
      currency: "USD",
      description: "$5 for 5 credits",
      source: req.body.id
    });
    console.log(charge);
  });
};
