import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.GET_PRODUCT:
      // const product = state.products.find((item) => item.id === payload);
      // return { ...state.products, selectedProduct: product };
      return { ...state.products, selectedProduct: payload };
    default:
      return state;
  }
};
