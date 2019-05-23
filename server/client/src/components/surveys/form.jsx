import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import InputField from "./field.jsx";

class Form extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={InputField} />
      </div>
    );
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
