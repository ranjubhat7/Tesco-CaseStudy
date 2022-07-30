import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.styles.css";
import Cart from "../Cart/Cart";
import { userSignOut } from "../Store/Actions/UserAction";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart(!showCart);
  };
  const userCredentials = localStorage.getItem("userCredentials");
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const cartlength = useSelector((item) => item.CartReducer.cartItems.length);
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
                  onClick={() => dispatch(userSignOut())}
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
                <img src="static\images\cart.svg" height={50} width={50} alt="cartIcon" />
                <p>{`${cartlength} items`}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
