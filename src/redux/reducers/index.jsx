import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { categoryReducer } from "./categoryReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  allCategories: categoryReducer,
});

export default reducers;
