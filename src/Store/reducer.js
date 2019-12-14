const initialState = {
  counter: 0,
  btnAddCount: 5,
  btnSubtractCount: 10,
};

const reducer = (state = initialState, action) => {
  let updatedState = { ...state };
  let counter = updatedState.counter;

  switch (action.type) {
    case "INCREMENT":
      updatedState.counter = counter + 1;
      break;

    case "ADD":
      updatedState.counter = counter + state.btnAddCount;
      break;

    case "DECREMENT":
      updatedState.counter = counter - 1;
      break;

    case "SUBTRACT":
      updatedState.counter = counter - state.btnSubtractCount;
      break;

    default:
      break;
  }
  return updatedState;
};

export default reducer;
