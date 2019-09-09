const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  let updatedState = { ...state };
  
  switch (action.type) {
    case "INCREMENT":
      updatedState.counter += 1;
      break;

    case "DECREMENT":
      updatedState.counter -= 1;
      break;

    case "ADD":
      updatedState.counter += action.value;
      break;

    case "SUBTRACT":
      updatedState.counter -= action.value;
      break;
    default:
      break;
  }

  return updatedState;
};

export default reducer;
