const initialState = {
  counter: 1
};

const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 2
      };
    default:
      return state;
  }
};

export default reducerCounter;
