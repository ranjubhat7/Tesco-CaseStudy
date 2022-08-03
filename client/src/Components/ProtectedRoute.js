import React from "react";
import { useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";
import { clearCart } from "./Store/Actions/CartActions";
import { userSignOut } from "./Store/Actions/UserAction";
import { getCookie } from "./Store/Utils";
const Protected = ({ children }) => {
  const dispatch = useDispatch();
  if (!getCookie("token")) {
    dispatch(userSignOut());
    dispatch(clearCart());
    return <Navigate to={"/"} replace />;
  }
  return children;
};
export default Protected;
