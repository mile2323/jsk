import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: React.ReactElement }) => {
  const isLoggedIn = localStorage.getItem("adminToken");

  // ✅ If logged in, redirect to admin dashboard
  if (isLoggedIn) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
