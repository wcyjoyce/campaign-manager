import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types.js";

export const fetchUser = () => {
  return function(dispatch) {
    axios.get("/api/current_user")
      .then(response => dispatch({ type: FETCH_USER, payload: response.data  }));
  };
};

// Refactoring with Async/Await
// export const fetchUser = () => async dispatch => {
//   const response = await axios.get("/api/current_user");
//   dispatch({ type: FETCH_USER, payload: response.data });
// };

export const handlePaymentToken = token => async dispatch => {
  const response = await axios.post("/api/stripe", token); // response when Stripe token is successfully authenticated
  dispatch({ type: FETCH_USER, payload: response.data }); // sends back the same user (but with updated credits)
};

export const submitSurvey = (values, history) => async dispatch => {
  const response = await axios.post("/api/surveys", values);
  history.push("/surveys"); // redirects user to dashboard after survey is submitted
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchSurveys = () => async dispatch => {
  const response = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: response.data });
};
