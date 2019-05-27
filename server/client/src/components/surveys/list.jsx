import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions/index.js";

class List extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  };

  renderList() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="survey" key={survey._id}>
          <div>Title: {survey.title}</div>
          <div>Body: {survey.body}</div>
          <div>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</div>
          <div>Yes: {survey.yes} | No: {survey.no}</div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <h3>Surveys</h3>
        {this.renderList()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(List);
