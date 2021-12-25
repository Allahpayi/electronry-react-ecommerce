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
