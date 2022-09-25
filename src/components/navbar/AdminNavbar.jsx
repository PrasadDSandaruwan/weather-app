import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/SVG/footerLogo";
import "./css/HomeNavbar.css";

const AdminNavbar = (props) => {
  const navClass = "navbar navbar-expand-lg navbar-light ";

  return (
    <React.Fragment>
      <div className="fixed-top">
        <nav id="home-nav" className={navClass + " admin-nav-main "}>
          <div className="container ">
            <div className="row w-100">
              <div class="logo col-3">
                <Logo></Logo>
              </div>

              <div class="collapse navbar-collapse col-8" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item nav-link">
                    <NavLink class="nav-link" to="#">
                      <span className="text-white">Dashboard</span>
                    </NavLink>
                  </li>
                  <li class="nav-item nav-link">
                    <NavLink class="nav-link" to="#">
                      <span className="text-white">Forecast</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <hr className=" text-white p-0 m-0" />
        <div className={navClass + " admin-nav"}>
          <div className="container">
            <div class="collapse navbar-collapse row w-100" id="navbarNav">
              <div class="navbar-nav col-8 offset-3">
                <div class="nav-item nav-link ">
                  <NavLink class="nav-link" to="#">
                    <span className="text-white">Register User</span>
                  </NavLink>
                </div>
                <div class="nav-item nav-link ">
                  <NavLink class="nav-link" to="#">
                    <span className="text-white">Add dataset</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminNavbar;
