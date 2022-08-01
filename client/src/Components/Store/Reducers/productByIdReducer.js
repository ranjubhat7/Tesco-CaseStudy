const INITIAL_STATE = {
  product: [],
  productLoading: "Loading",
  producterror: "",
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
    default:
      return state;
  }
};

export default ProductByIdReducer;
