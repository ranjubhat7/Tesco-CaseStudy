import axios from "axios";

export const fetchProductList = () => {
  return { type: "fetchProductList" };
};
export const fetchProductListSuccess = (productList) => {
  return {
    type: "fetchProductListSuccess",
    payload: productList,
  };
};
export const fetchProductListFailed = (error) => {
  console.log(error);
  return {
    type: "fetchProductListFailed",
    payload: error,
  };
};

export const addToCart = (productId) => {
  return {
    type: "addToCart",
    payload: productId,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "removeFromCart",
    payload: productId,
  };
};

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductList());
    axios
      .get("http://localhost:4040/products")
      .then((response) => dispatch(fetchProductListSuccess(response.data)))
      .catch((error) => dispatch(fetchProductListFailed(error.message)));
  };
}
