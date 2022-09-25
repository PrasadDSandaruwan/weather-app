import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/SVG/footerLogo";
import "./css/HomeNavbar.css";

const UserNavbar = (props) => {
  const navClass =
    "navbar navbar-expand-lg navbar-light  fixed-top home-nav solid";

  return (
    <React.Fragment>
      <nav id="home-nav" className={navClass}>
        <div className="container">
          <div class="logo">
            <Logo />
          </div>

          <div class="collapse navbar-collapse" id="navbarNav">
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
      </nav>
    </React.Fragment>
  );
};

export default UserNavbar;
