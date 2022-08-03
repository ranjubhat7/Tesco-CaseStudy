import { getUpdatedProductList } from "../Utils";
const INITIAL_STATE = {
  productList: [],
  productLoading: "Loading",
  productError: "",
};

const ProductListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "fetchProductList":
      return {
        ...state,
        productLoading: "Loading",
      };
    case "fetchProductListSuccess":
      return {
        ...state,
        productList: action.payload,
        productLoading: "Success",
      };
    case "fetchProductListFailed":
      return {
        ...state,
        productList: [],
        productError: action.payload,
        productLoading: "Failed",
      };
    case "addToCart":
      return {
        ...state,
        productList: state.productList.length
          ? [
              ...getUpdatedProductList(
                "addToCart",
                action.payload,
                state.productList
              ),
            ]
          : [...getUpdatedProductList("addToCart", action.payload)],
      };
    case "removeFromCart":
      return {
        ...state,
        productList: [
          ...getUpdatedProductList(
            "removeFromCart",
            action.payload,
            state.productList
          ),
        ],
      };
    default:
      return state;
  }
};

export default ProductListReducer;
