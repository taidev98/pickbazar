import { FETCH_CATEGORY, ADD_CATEGORY } from "../constants/ActionTypes";
const initialState = [];

const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      state = action.category;
      return state;
    case ADD_CATEGORY:
      return [...state, action];
    default:
      return state;
  }
};
export default category;
