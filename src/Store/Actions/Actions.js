import * as ActionTypes from "./Types";

export const increment = () => {
  return {
    type: ActionTypes.INCREMENT
  };
};

export const add = count => {
  return {
    type: ActionTypes.ADD
  };
};

export const decrement = () => {
  return {
    type: ActionTypes.DECREMENT
  };
};

export const subtract = () => {
  return {
    type: ActionTypes.SUBTRACT
  };
};

export const storeResult = counter => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.STORE_RESULT,
        counter
      });
    }, 2000);
  };
};

export const deleteResult = idx => {
  return {
    type: ActionTypes.DELETE_RESULT,
    idx
  };
};

export const saveAnimeChars = (response) => {
  return dispatch => {
      dispatch({
          type: ActionTypes.SAVE_ANIME_CHARS,
          response
      })
  };
};
