import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        name="Campaign Manager"
        description="$5 for 5 survey credits"
        amount={500} // denominated in USD cents
        token={token => this.props.handlePaymentToken(token)} // authorisation token (representing the charge) after successful callback from Stripe's API
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
      <button className="btn-alt">Add Credits</button>
      </StripeCheckout>
    );
  };
};

export default connect(null, actions)(Stripe);
