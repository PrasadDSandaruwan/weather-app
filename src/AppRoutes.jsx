import React, { Component } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./components/common/login";
import SignUp from "./components/common/signup";

import Home from "./components/pages/Home";
import Dashboard from "./components/dashboard/dashboard";
import Forecast from "./components/forecast/forecast";

import ProtectedRoute from "./components/common/pretectedRoute";
import Logout from "./components/common/logout";
import UploadCSV from "./components/common/uploadCSV";

import DashboardContent from "./components/dashboard/dashboard2";
import DecomposedContent from "./components/dashboard/decomposedcontent";
import MainDashboard from "./components/dashboard/maindashboard";

export class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/add-user"
            element={
              <ProtectedRoute>
                <SignUp />
              </ProtectedRoute>
            }
          />

          <Route
            path="/upload-dataset"
            element={
              <ProtectedRoute>
                <UploadCSV />
              </ProtectedRoute>
            }
          />
          <Route path="/auth" element={<Login />} />

          <Route path="/seasonal" element={<DashboardContent />} />
          <Route path="/forecast" element={<Forecast />} />

          <Route path="/logout" element={<Logout />} />

          <Route path="/decomposed" element={<DecomposedContent />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
