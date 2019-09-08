const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  count: 0
};

const store = createStore((state = initialState, action) => {
  console.log(" [REDUCER EXECUTING] ");

  let count = state.count;

  switch (action.type) {
    case "INCREMENT_COUNTER":
      count += 1;
      break;

    case "ADD_COUNTER":
      count += action.value;
      break;

    default:
      break;
  }

  return {
    ...state,
    count
  };
});

store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });

console.log(" [state] ", store.getState());
