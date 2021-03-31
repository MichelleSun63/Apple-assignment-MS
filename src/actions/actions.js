import * as actions from "./actionConstants";

export const addItem = (it) => {
  return { type: actions.ADD_DATA, it };
};

export const removeItem = (it) => {
  return { type: actions.REMOVE_DATA, it };
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
