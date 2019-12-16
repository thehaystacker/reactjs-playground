import * as ActionTypes from "../Actions/Types";

const initialState = {
  results: []
};

const reducerResults = (state = initialState, action) => {
  let updatedState = { ...state };

  switch (action.type) {
    case ActionTypes.STORE_RESULT:
      updatedState.results = [...state.results, action.counter];
      break;

    case ActionTypes.DELETE_RESULT:
      let results = [...state.results];
      results.splice(action.idx, 1);
      updatedState.results = results;
      break;

    default:
      updatedState = state;
      break;
  }

  //   console.log('[updatedState]', updatedState);

  return updatedState;
};

export default reducerResults;
