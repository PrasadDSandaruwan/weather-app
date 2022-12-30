import React from "react";
import { NavLink } from "react-router-dom";
import LoggedIn from "../common/loggedIn";
import Logo from "../common/SVG/footerLogo";
import "./css/HomeNavbar.css";
import authService from "../../service/authService";

const AdminNavbar = (props) => {
  const navClass = "navbar navbar-expand-lg navbar-light ";

  return (
    <React.Fragment>
      <div className="fixed-top">
        <nav id="home-nav" className={navClass + " admin-nav-main "}>
          <div className="container ">
            <div className="row w-100">
              <div class="logo col-3">
                <NavLink to="/">
                  <Logo></Logo>
                </NavLink>
              </div>

              <div class="collapse navbar-collapse col-7" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item nav-link">
                    <NavLink class="nav-link" to="/dashboard">
                      <span className="text-white">Dashboard</span>
                    </NavLink>
                  </li>
                  <li class="nav-item nav-link">
                    <NavLink class="nav-link" to="/seasonal">
                      <span className="text-white">Seasonal Analysis</span>
                    </NavLink>
                  </li>
                  <li class="nav-item nav-link">
                    <NavLink class="nav-link" to="/decomposed">
                      <span className="text-white">Decomposition Analysis</span>
                    </NavLink>
                  </li>
                  <li class="nav-item nav-link">
                    <NavLink class="nav-link" to="/forecast">
                      <span className="text-white">Forecast</span>
                    </NavLink>
                  </li>
                  {authService.getCurrentUser() && (
                    <>
                      <li class="nav-item nav-link">
                        <NavLink class="nav-link" to="/add-user">
                          <span className="text-white">Add User</span>
                        </NavLink>
                      </li>
                      <li class="nav-item nav-link">
                        <NavLink class="nav-link" to="/upload-dataset">
                          <span className="text-white">Add Dataset</span>
                        </NavLink>
                      </li>
                      <li class="nav-item nav-link">
                        <NavLink class="nav-link" to="/logout">
                          <span className="text-white">Logout</span>
                        </NavLink>
                      </li>
                      {/* <li class="nav-item nav-link">
                    <NavLink class="nav-link" to="#">
                      <span className="text-white">Forecast</span>
                    </NavLink>
                  </li> */}
                    </>
                  )}
                </ul>
              </div>
              {/* <div className="col-2 text-center m-auto align-items-center justify-content-center">
                <LoggedIn></LoggedIn>
              </div> */}
            </div>
          </div>
        </nav>
        {/* {authService.getCurrentUser() && (
          <>
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
          </>
        )} */}
      </div>
    </React.Fragment>
  );
};

export default AdminNavbar;
