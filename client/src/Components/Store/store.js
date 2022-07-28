import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import CombineReducers from "./CombineReducers";
export default function congfigureStore() {
  const middleWares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleWares);
  const reduxStore = createStore(CombineReducers, middleWareEnhancer);
  return reduxStore;
}
