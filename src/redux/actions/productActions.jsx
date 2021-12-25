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
  return async (dispatch) => {
    const response = await axios.get(
      `https://electronry-default-rtdb.firebaseio.com/products.json`
    );
    const responseData = await response.data;
    const newProduct = [];
    for (const key in responseData) {
      newProduct.push({
        id: responseData[key].id,
        categoryName: responseData[key].categoryName,
        name: responseData[key].name,
        description: responseData[key].description,
        img: responseData[key].img,
        sku: responseData[key].sku,
        vendor: responseData[key].vendor,
        availability: responseData[key].availability,
        productType: responseData[key].productType,
        price: responseData[key].price,
        bestSelling: responseData[key].bestSelling,
        topRated: responseData[key].topRated,
        mostPopular: responseData[key].mostPopular,
        newProduct: responseData[key].newProduct,
        discount: responseData[key].discount,
        discountRate: responseData[key].discountRate,
        raiting: responseData[key].raiting,
        size: responseData[key].size,
        color: responseData[key].color,
      });
    }
    dispatch(getProducts(newProduct));
  };
};
