import { ActionTypes } from "../constants/action-types";

const initialState = {
  categories: [],
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
