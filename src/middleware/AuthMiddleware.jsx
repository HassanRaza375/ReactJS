import React from "react";
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    // Redirect to login page if no token exists
    return <Navigate to="/SignUp" replace />;
  }

  // Allow access to the current page if token exists
  return children;
};

export default AuthMiddleware;
