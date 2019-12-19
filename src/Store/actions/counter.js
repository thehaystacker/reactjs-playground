export const incrementCounter = () => {
  console.log("[Action] incrementCounter");

  return { type: "INCREMENT_COUNTER" };
};

export const cbIncrementCounterSuccess = () => {
  console.log("[cbIncrementCounterSuccess]");

  return { type: "SUCCESS_INCREMENT_COUNTER" };
};
