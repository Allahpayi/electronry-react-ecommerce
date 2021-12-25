import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  selectedProduct: {},
  discountProducts: [],
  newProducts: [],
  bestSellingProducts: [],
  topRatedProducts: [],
  mostPopularProducts: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.GET_PRODUCT:
      const product = state.products.find((product) => product.id === payload);
      return { ...state, selectedProduct: product };

    case ActionTypes.GET_DICOUNT_PRODUCTS:
      const discountProducts = state.products.filter(
        (product) => product.discount
      );
      return { ...state, discountProducts };

    case ActionTypes.GET_NEW_PRODUCTS:
      const newProducts = state.products.filter(
        (product) => product.newProduct
      );
      return { ...state, newProducts };

    case ActionTypes.GET_BEST_SELLING_PRODUCTS:
      const bestSellingProducts = state.products.filter((product) => product.bestSelling);
      return { ...state, bestSellingProducts };

    case ActionTypes.GET_TOP_RATED_PRODUCTS:
      const topRatedProducts = state.products.filter((product) => product.bestSelling);
      return { ...state, topRatedProducts };

    case ActionTypes.GET_MOST_POPULAR_PRODUCTS:
      const mostPopularProducts = state.products.filter((product) => product.discount);
      return { ...state, mostPopularProducts };
    default:
      return state;
  }
};
