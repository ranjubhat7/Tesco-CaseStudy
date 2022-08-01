import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "../Store/Actions/UserAction";
import "./Login.css";
import { getLoginError, getLoginStatus } from "../Store/Selectors/userSelector";
import { setError } from "../Store/Actions/UserAction";
const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const loginStatus = useSelector(getLoginStatus);
  let apiError = useSelector(getLoginError);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (apiError) dispatch(setError());
    setErrorMessage(null);
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(null);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userCredentials.email)) {
      setErrorMessage("Invalid Email");
      return;
    }
    // const savedUserCredentials = JSON.parse(
    //   localStorage.getItem("userCredentials")
    // );
    // if (
    //   savedUserCredentials &&
    //   (savedUserCredentials.email !== email ||
    //     savedUserCredentials.password !== password)
    // ) {
    //   setErrorMessage("Invalid Credentials");
    //   return;
    // }
    dispatch(signIn(userCredentials));
  };
  useEffect(() => {
    if (localStorage.getItem("userCredentials")) navigate("/products");
  }, []);

  useEffect(() => {
    if (loginStatus.status === 200 && !errorMessage && !apiError) {
      document.cookie = `token=${loginStatus.data.token}; SameSite=None; Secure`;
      navigate("/products");
    }
  }, [loginStatus]);
  return (
    <>
      <div className="logincontainer">
        <div className="container">
          <div className="loginheading">Login</div>
          <div className="logindescription">
            Get access to your orders, Whishlist and Recommendations
          </div>
        </div>
        <div className="loginform">
          <form onSubmit={handleSubmit}>
            <div className="emailBox">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userCredentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="emailBox">
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={userCredentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="loginbutton">
              Login
            </button>
            <p className="loginError">{apiError || errorMessage || ""}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
