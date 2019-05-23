// import React, { Component } from "react";
import React from "react";

const InputField = ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default InputField;
