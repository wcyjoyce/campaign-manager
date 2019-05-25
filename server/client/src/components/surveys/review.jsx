import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import formFields from "./surveyFields.js";

class Review extends Component {
  reviewInput() {
    return _.map(formFields, field => {
      return (
        <table key={field.name}>
          <tr>
            <td>{field.label}</td>
            <td>{this.props.formValues[field.name]}</td>
          </tr>
        </table>
      );
    });
  };

  render() {
    return (
      <div className="review">
        <h2>Please Review</h2>
        <div className="form-content">
          {this.reviewInput()}
        </div>
        <div className="field-actions">
          <button className="btn btn-warning" onClick={this.props.onBack}>Back</button>
          <button className="btn btn-success">Submit</button>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(Review);
