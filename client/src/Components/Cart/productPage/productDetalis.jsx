import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProdcuctList } from "../../Store/Selectors/productSelector";
import "./ProductDetalis.css";
import { addItem } from "../../Store/Actions/CartActions";
import { addToCart } from "../../Store/Actions/ProductListActions";

function ProductDetalis() {
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(addItem(productData[0]));
    dispatch(addToCart(productData[0].id));
  };
  const selectorProduct = useSelector(getProdcuctList);
  const params = useParams();
  const productData = selectorProduct.filter((p) => p.id === params.productId);

  return (
    <div>
      <div className="productdetalis">
        <div className="productimage">
          <img src={productData[0]?.imageURL} alt="product" />
        </div>
        <div className="productcontainers">
          <div className="product-headings">{productData[0]?.name}</div>
          <div className="product-description">
            {productData[0]?.description}
          </div>
          <div className="lowerContainer">
            <p>Available Quantity:{productData[0]?.stock}</p>
            <div className="product-price">
              <p>{`M.R.P.:	₹  ${productData[0]?.price}`}</p>
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
