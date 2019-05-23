import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Form extends Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
        <Field type="text" name="title" component="input" placeholder="Title" />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
};

export default reduxForm({ form: "form" })(Form);
