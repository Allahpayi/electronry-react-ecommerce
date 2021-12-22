import { ActionTypes } from "../constants/action-types";

export const getProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const getProduct = (id) => {
  return {
    type: ActionTypes.GET_PRODUCT,
    payload: id,
  };
};
