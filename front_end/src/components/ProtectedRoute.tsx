import React, { type JSX } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;        // expiry timestamp
  email: string;      // whatever you put in payload
  roles?: string[];   // optional if you added roles
}

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("jwt");

  if (!token) {
    // No token -> redirect to login
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // in seconds

    if (decoded.exp < currentTime) {
      // Token expired -> clear & redirect
      localStorage.removeItem("jwt");
      return <Navigate to="/login" replace />;
    }

    // ✅ Token exists & valid
    return children;

  } catch (err) {
    // Invalid token
    localStorage.removeItem("jwt");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
