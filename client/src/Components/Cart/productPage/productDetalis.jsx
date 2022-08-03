import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProdcuctList,
  getProductById,
} from "../../Store/Selectors/productSelector";
import "./ProductDetalis.css";
import { addItem } from "../../Store/Actions/CartActions";
import { addToCart } from "../../Store/Actions/ProductListActions";
import {
  clearProductById,
  fetchProductByIdAPI,
} from "../../Store/Actions/productByIdActions";
import NotFound from "../../NotFound/NotFound";
import { getCookie } from "../../Store/Utils";
function ProductDetalis() {
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(addItem(product[0]));
    dispatch(addToCart(product[0].id));
  };
  const { productList } = useSelector(getProdcuctList);
  const params = useParams();
  const productDataFromList = productList.filter(
    (p) => p.id === params.productId
  );
  const { product, productLoading, productError } = useSelector(getProductById);

  useEffect(() => {
    if (getCookie("token")) {
      dispatch(fetchProductByIdAPI(params.productId));
    }
    return () => dispatch(clearProductById());
  }, []);
  useEffect(() => {
    if (getCookie("token") && productError?.response?.status === 401)
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }, [productError]);

  const authenticationError = productError?.response?.status === 401;
  return (
    <div>
      {productLoading === "Loading" && <h1 className="centerAlign">Loading</h1>}
      {productLoading === "Failed" &&
        (authenticationError ? (
          <p className="centerAlign">Please logout and login back</p>
        ) : (
          <p className="centerAlign">
            {"Something went wrong!!! Please refresh the Page"}
          </p>
        ))}
      {productLoading === "Success" && product.length ? (
        <div className="productdetalis">
          <div className="productimage">
            <img src={product[0]?.imageURL} alt="product" loading={"lazy"} />
          </div>
          <div className="productcontainers">
            <div className="product-headings">{product[0]?.name}</div>
            <div className="product-description">{product[0]?.description}</div>
            <div className="lowerContainer">
              <p>
                Available Quantity:
                {productDataFromList[0]?.stock || product[0]?.stock}
              </p>
              <div className="product-price">
                <p>{`M.R.P.:	₹  ${product[0]?.price}`}</p>
                <button className="product-Button" onClick={handleCartButton}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {productLoading !== "Loading" && productLoading !== "Failed" && (
            <NotFound />
          )}
        </>
      )}
    </div>
  );
}

export default ProductDetalis;
