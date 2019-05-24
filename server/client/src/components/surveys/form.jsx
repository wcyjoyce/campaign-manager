import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash";

import InputField from "./field.jsx";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "content" },
  { label: "Recipient List", name: "recipients" }
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
  if (!values.title) {
    errors.title = "You must provide a title."
  }

  if (!values.subject) {
    errors.subject = "You must provide a subject line."
  }

  if (!values.content) {
    errors.content = "You must provide a body for your email."
  }

  if (!values.recipients) {
    errors.recipients = "You must provide at least one email that you would like to send to."
  }
  return errors;
};

export default reduxForm({ validate, form: "form" })(Form);
