import React from "react";

import "./CSS/analyse.css";
import { NavLink } from "react-router-dom";

const Analyze = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="analyze-box border rounded shadow row">
        <div className="col-4 text-center m-auto align-items-center justify-content-center">
          <div className="analyse-text">Analyze Weather Data</div>

          <p> We provide functionalities to analyse past Weather data.</p>
          <NavLink to="/dashboard">
            <button style={{ color: "white", backgroundColor: "red" }}>
              Click Here!
            </button>
          </NavLink>
        </div>
        <div className="col-8 analyse-image"></div>
      </div>
    </div>
  );
};

export default Analyze;
