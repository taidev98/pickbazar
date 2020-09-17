import { FETCH_CATEGORY, ADD_CATEGORY } from "../constants/ActionTypes";

import callApi from "../services";

export default () => {
  return (dispart) => {
    return callApi("category").then((res) =>
      dispart(actFetchCategory(res.data))
    );
  };
};
export const actFetchCategory = (category) => {
  return {
    type: FETCH_CATEGORY,
    category,
  };
};
export const actAddCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    category,
  };
};
