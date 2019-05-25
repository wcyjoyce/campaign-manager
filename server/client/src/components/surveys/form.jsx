import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash";

import formFields from "./surveyFields.js";
import InputField from "./field.jsx";
import validateEmails from "../../utilities/validateEmail.js";

class Form extends Component {
  // renderFields() {
  //   return (
  //     <div>
  //       <Field label="Survey Title" type="text" name="title" component={InputField} />
  //       <Field label="Subject Line" type="text" name="subject" component={InputField} />
  //       <Field label="Email Body" type="text" name="content" component={InputField} />
  //       <Field label="Recipient List" type="text" name="recipients" component={InputField} />
  //     </div>
  //   );
  // };

  // refactoring input fields to keep it DRY
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field component={InputField} key={name} type="text" label={label} name={name} placeholder={name} />
    });
  };

  render() {
    return (
      <div className="form">
      <h2>New Survey</h2>
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        <div className="fields">{this.renderFields()}</div>
        <div className="field-actions">
          <button type="submit" className="btn btn-info">Submit</button>
          <Link to="/surveys" className="btn btn-info">Cancel</Link>
        </div>
      </form>
      </div>
    );
  };
};


// form input validation
function validate(values) {
  const errors = {};

  // email validation
  errors.recipients = validateEmails(values.recipients || "");

  // if (!values.title) {
  //   errors.title = "You must provide a title."
  // };

  // refactoring form validation
  _.each(formFields, ({ name, error }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${error}.`;
    };
  });


  return errors;
};

// destroyOnUnmount: destroys input values when component has been unmounted
export default reduxForm({ validate, form: "surveyForm", destroyOnUnmount: false })(Form);
