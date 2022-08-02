import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.styles.css";
import Cart from "../Cart/Cart";
import { userSignOut } from "../Store/Actions/UserAction";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Store/Actions/CartActions";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart(!showCart);
  };
  const userCredentials = localStorage.getItem("userCredentials");
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isLoggedIn = localStorage.getItem("userCredentials");
  const dispatch = useDispatch();
  const cartlength = useSelector((item) => item.CartReducer.cartItems.length);
  const navigate = useNavigate();
  return (
    <div>
      {showCart && <Cart />}
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <img src="/static/images/Tesco-Logo.png" alt="logo" width={100} />
          </div>

          <div className="cart">
            {isLoggedIn ? (
              <>
                <div className="right-menu first-name">
                  Hi, {userCredentials}
                </div>
                <div
                  className="right-menu"
                  onClick={() => {
                    dispatch(userSignOut());
                    dispatch(clearCart());
                    navigate("/");
                  }}
                >
                  Sign Out
                </div>
              </>
            ) : (
              <div className="register">
                <a href="/" className="righttmenu">
                  Signin
                </a>
              </div>
            )}

            <div className="cartimage">
              <button onClick={handleCart}>
                <img
                  src="../../../../static/images/cart.svg"
                  height={50}
                  width={50}
                  alt="cartIcon"
                />
                {isLoggedIn && <p>{`${cartlength} items`}</p>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
