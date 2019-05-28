import React from "react";

// meta - further destructuring nested objects
const InputField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      <div className="error">{touched && error ? error : "" }</div>
    </div>
  );
};

export default InputField;
