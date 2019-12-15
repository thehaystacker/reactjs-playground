import * as ActionTypes from "../Actions/Types";

const initialState = {
  counter: 0,
  btnAddCount: 5,
  btnSubtractCount: 10,
};

const reducerCounter = (state = initialState, action) => {
  let updatedState = { ...state };
  let counter = updatedState.counter;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      updatedState.counter = counter + 1;
      break;

    case ActionTypes.ADD:
      updatedState.counter = counter + state.btnAddCount;
      break;

    case ActionTypes.DECREMENT:
      updatedState.counter = counter - 1;
      break;

    case ActionTypes.SUBTRACT:
      updatedState.counter = counter - state.btnSubtractCount;
      break;

    default:
      updatedState = state;
      break;
  }

  //   console.log('[updatedState]', updatedState);

  return updatedState;
};

export default reducerCounter;
