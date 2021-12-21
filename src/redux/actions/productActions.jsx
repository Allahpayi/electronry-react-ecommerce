import { ActionTypes } from "../constants/action-types";

export const getProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const getDiscount = ([products]) => {
  return {
    type: ActionTypes.DISCOUNT,
    payload: products,
  };
};
