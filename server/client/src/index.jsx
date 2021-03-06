import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import "./stylesheets/application.scss";
import App from "./components/app.jsx";

import authReducer from "./reducers/auth_reducer.js";
import surveysReducer from "./reducers/surveys_reducer.js";

// Testing email sending via SendGrid
import axios from "axios";
window.axios = axios;

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveysReducer
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
