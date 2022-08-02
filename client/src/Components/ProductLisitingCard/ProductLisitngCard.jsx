import React from "react";
import { useDispatch } from "react-redux";
import "./ProductListingCard.css";
import { addItem } from "../Store/Actions/CartActions";
import { addToCart } from "../Store/Actions/ProductListActions";
import { useNavigate } from "react-router";

const Card = (props) => {
  const { category } = props;
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(addItem(category));
    dispatch(addToCart(category.id));
  };
  const navigate = useNavigate();

  return (
    <div
      key={category.key}
      className="productcategory"
      onClick={() => navigate(`${category.id}`)}
    >
      <div className="productcontent">
        <div className="productheading">{category.name}</div>
        <div className="productimageClass">
          <img src={category.imageURL} alt="category" loading="lazy" />
        </div>
        <p>Available Quantity:{category.stock}</p>
        <div className="productpriceCard">
          <p>{`MRP Rs.${category.price}`}</p>
          <button className="productexploreButton" onClick={handleCartButton}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
