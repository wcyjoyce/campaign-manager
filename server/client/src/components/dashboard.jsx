import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import List from "./surveys/list.jsx";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>Hello!</p>
        <List />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Dashboard);
