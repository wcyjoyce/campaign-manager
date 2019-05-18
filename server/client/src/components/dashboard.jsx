import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h4>Credits: {this.props.auth.credits}</h4>
        This is a dashboard.
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Dashboard);
