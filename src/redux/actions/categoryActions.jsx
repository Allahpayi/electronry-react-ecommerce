import { ActionTypes } from "../constants/action-types";

export const getCategories = (categories) => {
  return {
    type: ActionTypes.GET_CATEGORIES,
    payload: categories,
  };
};