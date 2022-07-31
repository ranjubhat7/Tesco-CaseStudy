import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getProdcuctList } from "../../Store/Selectors/productSelector";
import { useState } from "react";
import "./ProductDetalis.css";
import { addItem } from "../../Store/Actions/CartActions";
import { addToCart } from "../../Store/Actions/ProductListActions";

function ProductDetalis(props) {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(addItem(product));
    dispatch(addToCart(product.id))
  };
  const selectorProduct = useSelector(getProdcuctList);
  console.log(selectorProduct);
  const params = useParams();
  useEffect(() => {
    const getProduct = selectorProduct.filter((p) => p.id === params.productId);
    setProduct(getProduct[0]);
    console.log(getProduct[0]);
  }, []);
  console.log(params);
  console.log(product);
  return (
    <div>
      <div className="productdetalis">
        <div className="productimage">
          <img src={product.imageURL} alt="product" />
        </div>
        <div className="productcontainers">
          <div className="product-headings">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="lowerContainer">
          <p>Available Quantity:{product.stock}</p>
          <div className="product-price">
            <p>{`M.R.P.:	₹  ${product.price}`}</p>
            <button className="product-Button" onClick={handleCartButton}>Buy Now</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetalis;
