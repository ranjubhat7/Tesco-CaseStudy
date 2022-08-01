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
import { fetchProductByIdAPI } from "../../Store/Actions/productByIdActions";

function ProductDetalis() {
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(addItem(productById));
    dispatch(addToCart(productById.id));
  };
  const selectorProduct = useSelector(getProdcuctList);
  const params = useParams();
  const productDataFromList = selectorProduct.filter(
    (p) => p.id === params.productId
  );
  const productById = useSelector(getProductById);
  useEffect(() => {
    dispatch(fetchProductByIdAPI(params.productId));
  }, []);
  return (
    <div>
      <div className="productdetalis">
        <div className="productimage">
          <img src={productById?.imageURL} alt="product" />
        </div>
        <div className="productcontainers">
          <div className="product-headings">{productById?.name}</div>
          <div className="product-description">{productById?.description}</div>
          <div className="lowerContainer">
            <p>
              Available Quantity:
              {productDataFromList[0]?.stock || productById?.stock}
            </p>
            <div className="product-price">
              <p>{`M.R.P.:	₹  ${productById?.price}`}</p>
              <button className="product-Button" onClick={handleCartButton}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetalis;
