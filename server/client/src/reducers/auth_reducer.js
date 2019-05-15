import { FETCH_USER } from "../actions/types.js";

const authReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // returns false if user has logged out
    default:
      return state;
  };
};

export default authReducer;
