import axios from "axios";

export const fetchProductById = () => {
  return { type: "fetchProductById" };
};
export const fetchProductByIdSuccess = (product) => {
  return {
    type: "fetchProductByIdSuccess",
    payload: product,
  };
};
export const fetchProductLByIdFailed = (error) => {
  return {
    type: "fetchProductByIdFailed",
    payload: error,
  };
};

export function fetchProductByIdAPI(productId) {
  return (dispatch) => {
    dispatch(fetchProductById());
    let options = {
      method: "POST",
      url: "http://localhost:4040/productById",
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: { productId },
    };
    axios(options)
      .then((response) => {
        dispatch(fetchProductByIdSuccess(response.data));
      })
      .catch((error) => dispatch(fetchProductLByIdFailed(error)));
  };
}

export const clearProductById = () => {
  return {
    type: "clearProductById",
  };
};
