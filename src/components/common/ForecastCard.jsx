import React from "react";

import "./CSS/analyse.css";
import { NavLink } from "react-router-dom";

const ForecastCard = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="analyze-box border rounded shadow row">
        <div className="col-4 text-center m-auto align-items-center justify-content-center">
          <div className="analyse-text">Forecast Weather Data</div>

          <p> We provide forecasted Weather data for next seven days.</p>
          <NavLink to="/forecast">
            <button style={{ color: "white", backgroundColor: "red" }}>
              Click Here!
            </button>
          </NavLink>
        </div>
        <div className="col-8 forecast-image"></div>
      </div>
    </div>
  );
};

export default ForecastCard;
