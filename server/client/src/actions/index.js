import axios from "axios";
import { FETCH_USER } from "./types.js";

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
