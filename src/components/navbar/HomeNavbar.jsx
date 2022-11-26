import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/SVG/footerLogo";
import "./css/HomeNavbar.css";

const HomeNavbar = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    // const height = window.height;
    if (window.scrollY >= 570) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const navClass = "navbar navbar-expand-lg navbar-light  fixed-top home-nav";

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <React.Fragment>
      <nav
        id="home-nav"
        className={colorChange ? navClass + " solid" : navClass}
      >
        <div className="container">
          <div class="logo">
            <Logo></Logo>
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
              {/* <li class="nav-item nav-link">
                <NavLink class="nav-link" to="#">
                  Pricing
                </NavLink>
              </li>
              <li class="nav-item nav-link">
                <NavLink class="nav-link disabled" to="#">
                  Disabled
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="home-image">
        <h1 className="text-white text-center main-heading">Weather Spark</h1>
      </div>
    </React.Fragment>
  );
};

export default HomeNavbar;