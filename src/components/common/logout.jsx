import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import authService from "../../service/authService";

function Logout() {
  let location = useLocation();

  authService.logout();

  return <Navigate to="/" state={{ from: location }} />;
}

export default Logout;
