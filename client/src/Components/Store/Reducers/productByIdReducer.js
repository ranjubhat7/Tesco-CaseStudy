const INITIAL_STATE = {
  product: [],
  productLoading: "Loading",
  productError: "",
};

const ProductByIdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "fetchProductById":
      return {
        ...state,
        productLoading: "Loading",
      };
    case "fetchProductByIdSuccess":
      return {
        ...state,
        product: action.payload,
        productLoading: "Success",
      };
    case "fetchProductByIdFailed":
      return {
        ...state,
        product: [],
        productError: action.payload,
        productLoading: "Failed",
      };
    case "clearProductById":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default ProductByIdReducer;
