import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Form from "./form.jsx";
import Review from "./review.jsx";

class New extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return <Review onBack={() => this.setState({ showReview: false })}/>;
    } else {
      return <Form onSurveySubmit={() => this.setState({ showReview: true })} />;
    };
  };

  render() {
    return <div>{this.renderContent()}</div>
  };
};

// reduxForm - destroyOnUnmount: true by default
export default reduxForm({ form: "surveyForm" })(New);
