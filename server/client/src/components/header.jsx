import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Stripe from "./stripe.jsx";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return; // shows nothing
      case false:
        return (
          <a href="/auth/google" className="btn btn-danger"><i className="fa fa-google"/>Sign In with Google</a>
        );
      default:
        return (
          <div>
            <Stripe />
            {/*<div className="btn btn-success">Credits: {this.props.auth.credits}</div>*/}
            <a href="/api/logout" className="btn btn-danger"><i className="fa fa-sign-out" />Sign Out</a>
          </div>
        );
    };
  };

  render() {
    return (
      <div className="header">
        <Link to={this.props.auth ? "/surveys" : "/"}><h1>Campaign Manager</h1></Link>
        {this.renderContent()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
