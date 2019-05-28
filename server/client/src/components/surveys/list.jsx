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
          <div className="title">{survey.title}</div>
          <div className="body">{survey.body}</div>
          <div className="footer">
            <div className="responses">
              <span className="response"><i className="fa fa-check" />{survey.yes}</span>
              <span className="response"><i className="fa fa-times" />{survey.no}</span>
            </div>
            <div className="date">{new Date(survey.dateSent).toLocaleDateString()}</div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <h3>Your Surveys</h3>
        <div className="surveys">{this.renderList()}</div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { surveys: state.surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(List);
