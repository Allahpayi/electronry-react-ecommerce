import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const getCategories = (categories) => {
  return {
    type: ActionTypes.GET_CATEGORIES,
    payload: categories,
  };
};

export const loadCategories = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://electronry-default-rtdb.firebaseio.com/categories.json`
    );
    const responseData = await response.data;
    const newCategories = [];
    for (const key in responseData) {
      newCategories.push({
        id: responseData[key].id,
        img: responseData[key].img,
        name: responseData[key].name,
        url: responseData[key].url,
      });
    }
    dispatch(getCategories(newCategories));
  };
};
