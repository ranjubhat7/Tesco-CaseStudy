import { combineReducers } from "redux";
import CartReducer from "./Reducers/CartReducer";
import ProductByIdReducer from "./Reducers/productByIdReducer";
import ProductListReducer from "./Reducers/ProductListReducer";
import userReducer from "./Reducers/UserReducer";

const CombineReducers = combineReducers({
  CartReducer: CartReducer,
  user: userReducer,
  products: ProductListReducer,
  productById: ProductByIdReducer,
});

export default CombineReducers;
