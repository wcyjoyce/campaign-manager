import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash";

import InputField from "./field.jsx";
import validateEmails from "../../utilities/validateEmail.js";

const FIELDS = [
  { label: "Survey Title", name: "title", error: "a title" },
  { label: "Subject Line", name: "subject", error: "an subject line" },
  { label: "Email Body", name: "content", error: "a body for your email" },
  { label: "Recipient List", name: "recipients", error: "at least one email that you would like this survey to" }
];

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
    return _.map(FIELDS, ({ label, name }) => {
      return <Field component={InputField} key={name} type="text" label={label} name={name} placeholder={name} />
    });
  };

  render() {
    return (
      <div className="form">
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        <div className="fields">{this.renderFields()}</div>
        <div className="field-actions">
          <Link to="/surveys" className="btn btn-info">Cancel</Link>
          <button type="submit" className="btn btn-info">Submit</button>
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
  _.each(FIELDS, ({ name, error }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${error}.`;
    };
  });


  return errors;
};

export default reduxForm({ validate, form: "form" })(Form);
