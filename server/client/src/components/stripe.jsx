import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500} // denominated in USD cents
        token={token => console.log(token)} // authorisation token (representing the charge) after successful callback from Stripe's API
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        className="btn"
      />
    );
  };
};

export default Stripe;
