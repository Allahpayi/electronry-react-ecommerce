import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const getCategories = (categories) => {
  return {
    type: ActionTypes.GET_CATEGORIES,
    payload: categories,
  };
};

export const loadCategories = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/categories`)
      .then((response) => {
        dispatch(getCategories(response.data));
      })
      .catch((error) => console.log(error));
  };
};
