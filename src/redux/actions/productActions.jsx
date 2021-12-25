import axios from "axios";
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
export const getDiscountProducts = () => {
  return {
    type: ActionTypes.GET_DICOUNT_PRODUCTS,
  };
};

export const getNewProducts = () => {
  return {
    type: ActionTypes.GET_NEW_PRODUCTS,
  };
};

export const getBestSellingProducts = () => {
  return {
    type: ActionTypes.GET_BEST_SELLING_PRODUCTS,
  };
};

export const getTopRatedProducts = () => {
  return {
    type: ActionTypes.GET_TOP_RATED_PRODUCTS,
  };
};

export const getMostPopularProducts = () => {
  return {
    type: ActionTypes.GET_MOST_POPULAR_PRODUCTS,
  };
};

export const loadProducts = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/products`)
      .then((response) => {
        dispatch(getProducts(response.data));
      })
      .catch((error) => console.log(error));
  };
};
