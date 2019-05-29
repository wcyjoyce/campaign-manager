import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // allows redirecting after survey has been submitted
import _ from "lodash";

import formFields from "./surveyFields.js";
import * as actions from "../../actions";

class Review extends Component {
  reviewInput() {
    return _.map(formFields, ({ name, label }) => {
      return (
        <table key={name}>
          <tbody>
            <tr>
              <td>{label}</td>
              <td>{this.props.formValues[name]}</td>
          </tr>
          </tbody>
        </table>
      );
    });
  };

  render() {
    return (
      <div className="review">
        <h2>Please Review</h2>
        <div className="content">
          {this.reviewInput()}
        </div>
        <div className="field-actions">
          <button className="btn" onClick={() => this.props.submitSurvey(this.props.formValues, this.props.history )}>Submit</button>
          <button className="btn" onClick={this.props.onBack}>Back</button>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(Review));
