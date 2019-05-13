import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import "./stylesheets/application.scss";
import App from "./components/app.jsx";

import authReducer from "./reducers/auth_reducer.js";

const reducers = combineReducers({
  auth: authReducer
});

const store = createStore(() => reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
