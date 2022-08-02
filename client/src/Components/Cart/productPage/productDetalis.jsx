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
function ProductDetalis() {
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(addItem(product[0]));
    dispatch(addToCart(product[0].id));
  };
  const selectorProduct = useSelector(getProdcuctList);
  const params = useParams();
  const productDataFromList = selectorProduct.filter(
    (p) => p.id === params.productId
  );
  const { product, productLoading, producterror } = useSelector(getProductById);

  useEffect(() => {
    dispatch(fetchProductByIdAPI(params.productId));
    return () => dispatch(clearProductById());
  }, []);

  return (
    <div>
      {productLoading === "Loading" && <h1 className="centerAlign">Loading</h1>}
      {productLoading === "Failed" && (
        <p className="centerAlign">{producterror}</p>
      )}
      {productLoading === "Success" && product.length ? (
        <div className="productdetalis">
          <div className="productimage">
            <img src={product[0]?.imageURL} alt="product"  loading={"lazy"}/>
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
        <>{productLoading !== "Loading" && <NotFound />}</>
      )}
    </div>
  );
}

export default ProductDetalis;
