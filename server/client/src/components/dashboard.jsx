import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <h4>Credits: {this.props.auth.credits}</h4>
        <div>This is a dashboard.</div>
        <Link to="/surveys/new" className="btn btn-danger"><i className="fa fa-plus"/>Add Survey</Link>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Dashboard);
