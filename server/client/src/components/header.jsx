import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Stripe from "./stripe.jsx";

class Header extends Component {
  state = { colour: "#FFE019" };

  changeColour = (event) => {
    window.scrollY > 437 ? this.setState({ colour: "white" }) : this.setState({ colour: "#FFE019" });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeColour);
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return; // shows nothing
      case false:
        return (
          <a href="/auth/google" className="btn"><i className="fa fa-google"/>Sign In</a>
        );
      default:
        return (
          <div>
            <div className="btn">{this.props.auth.credits ? "Credits: " + this.props.auth.credits : "" }</div>
            <Stripe />
            <a href="/api/logout" className="btn">Sign Out</a>
          </div>
        );
    };
  };

  render() {
    return (
      <div className="header" style={{ background: this.state.colour }}>
        <Link to={this.props.auth ? "/surveys" : "/"}><h1><i className="fa fa-paper-plane" />Campaign Manager</h1></Link>
        {this.renderContent()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
