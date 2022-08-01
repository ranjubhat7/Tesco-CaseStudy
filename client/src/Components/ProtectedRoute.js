import React from "react";
import { Navigate } from "react-router-dom";
const Protected = ({children }) => {
  if (!localStorage.getItem("userCredentials")) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
export default Protected;
