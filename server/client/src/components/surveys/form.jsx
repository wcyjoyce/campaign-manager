import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
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
      return <Field component={InputField} type="text" label={label} name={name} key={name} />
    });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
};

export default reduxForm({ form: "form" })(Form);
