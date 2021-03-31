import * as actions from "../actions/actionConstants";

const defaultStates = {
  mytitles: [],
  rectitles: []
};
export default function reducer(state = defaultStates, action) {
  const newState = { ...state };

  if (action.type === actions.SET_DATA) {
    newState.mytitles = action.data.mylist;
    newState.rectitles = action.data.recommendations;
    return newState;
  }

  if (action.type === actions.ADD_DATA) {
    let copied = state.mytitles;
    let titles = state.mytitles.filter((item) => item.id === action.payload.id);
    if (titles.length === 0) {
      copied = [...copied, action.payload];
    }
    newState.mytitles = copied;
    return newState;
  }

  if (action.type === actions.REMOVE_DATA) {
    let titles = state.mytitles.filter((item) => item.id !== action.payload.id);
    let copied = state.rectitles;
    let curtitles = state.rectitles.filter(
      (item) => item.id === action.payload.id
    );
    if (curtitles.length === 0) copied = [...copied, action.payload];
    newState.mytitles = titles;
    newState.rectitles = copied;
    return newState;
  }
  return state;
}
