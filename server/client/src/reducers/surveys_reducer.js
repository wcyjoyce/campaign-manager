import { FETCH_SURVEYS } from "../actions/types.js";

const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  };
};

export default surveysReducer;
