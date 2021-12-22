import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { categoryReducer } from "./categoryReducer";
import { cartReducer } from "./cartReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  allCategories: categoryReducer,
  cart: cartReducer,
});

export default reducers;
