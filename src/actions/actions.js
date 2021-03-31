import * as actions from "./actionConstants";

export const addItem = (item) => {
  return { type: actions.ADD_DATA, payload: item };
};

export const removeItem = (item) => {
  return { type: actions.REMOVE_DATA, payload: item };
};

export const setItem = () => {
  return (dispatch) => {
    let url = "./mock.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actions.SET_DATA,
          data
        });
      });
  };
};
