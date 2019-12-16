import * as ActionTypes from "../Actions/Types";

const initialState = {
  counter: 0,
};

const reducerCounter = (state = initialState, action) => {
  let updatedState = { ...state };

  switch (action.type) {
    default:
      updatedState = state;
      break;
  }

//   console.log("[updatedState]", updatedState);

  return updatedState;
};

export default reducerCounter;
