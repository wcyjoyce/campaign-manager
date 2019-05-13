import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Campaign Manager</h1>
        <ul>
          <a href="/auth/google" className="btn btn-danger">Sign in with Google</a>
        </ul>
      </div>
    );
  };
};

export default Header;
