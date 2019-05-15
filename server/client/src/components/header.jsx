import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return; // shows nothing
      case false:
        return (
          <a href="/auth/google" className="btn btn-danger"><i className="fa fa-google"/>Sign In with Google</a>
        );
      default:
        return (
          <a href="/api/logout" className="btn btn-danger"><i className="fa fa-sign-out" />Sign Out</a>
        );
    };
  };

  render() {
    return (
      <div className="header">
        <h1>Campaign Manager</h1>
        {this.renderContent()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
