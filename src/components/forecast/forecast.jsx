import React, { useState, useEffect } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import Footer from "../footer/footer";
import ForecastChart from "./forecastChart";

import {
  getCurrentData,
  getMinMax,
  getWeekdays,
} from "../../service/forecastService";

const Forecast = (props) => {
  const [current_weather, set_current_weather] = useState({
    date: "",
    dewpoint_temp: "",
    huminidy: "",
    solar_radiation: "",
    temperature: "",
    time: "",
  });

  const [min_max, set_min_max] = useState({
    Min: "",
    Max: "",
    Avg: "",
  });

  const [week_days, set_week_days] = useState([]);

  useEffect(() => {
    let cur_weather = {};
    async function fetchCurrentWeather() {
      cur_weather = await getCurrentData();
      set_current_weather(cur_weather);
    }
    fetchCurrentWeather().catch(console.error);
    console.log("USE", cur_weather.temperature);
  }, []);

  useEffect(() => {
    async function fetchMinMax() {
      let res = await getMinMax();
      console.log("RES", res);
      set_min_max(res);
    }
    fetchMinMax().catch(console.error);
  }, []);

  useEffect(() => {
    async function fetchWeekDays() {
      let res = await getWeekdays();
      console.log("RES", res);
      set_week_days(res);
    }
    fetchWeekDays().catch(console.error);
  }, []);

  return (
    <React.Fragment>
      <AdminNavbar />
      <div
        style={{ marginTop: "100px", marginBottom: "50px" }}
        className="container text-center justify-content-center mx-auto d-flex "
      >
        <div className="d-inline-block">
          <div
            className="p-3 "
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(45,45,45,0.8 ) , rgba(45,45,45,1))",
            }}
          >
            <div>
              <span className="text-white font-weight-bold m-3">
                <h1 className="d-inline-block">Now</h1>
              </span>
              <span className="text-white ">
                <h6 className="d-inline-block font-italic">
                  Forecasted Temperature
                </h6>
              </span>
            </div>
            <div className="mb-3">
              <span
                style={{ fontSize: "2.5em" }}
                className="text-white font-weight-bold ml=3"
              >
                {current_weather.temperature} C
              </span>
              <span
                style={{
                  fontSize: "0.8em",
                  color: "white",
                  paddingLeft: "5px",
                }}
              >
                {current_weather.time}
              </span>
            </div>
            <div>
              <div className="m-3 row">
                <div
                  style={{ marginRight: "20px" }}
                  className="d-inline-block text-white border-bottom border-white col"
                >
                  <div>Humidity </div>
                  <div> {current_weather.huminidy}%</div>
                </div>
                <div className="d-inline-block text-white border-bottom border-white col">
                  <div>Solar Radiation </div>
                  <div> {current_weather.solar_radiation}</div>
                </div>
              </div>
              <div className="row m-3">
                <div
                  style={{ marginRight: "20px" }}
                  className="d-inline-block text-white border-bottom border-white col"
                >
                  <div> Dew Point Temperature</div>
                  <div>{current_weather.dewpoint_temp} </div>
                </div>
                {/* <div className="d-inline-block text-white border-bottom border-white col">
                  <div>HUMINIDY </div>
                  <div> 20%</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-inline-block align-items-center my-auto"
          style={{ marginLeft: "20px" }}
        >
          <div className="font-weight-bold">
            <span style={{ fontSize: "4em", marginRight: "10px" }}>TODAY</span>{" "}
            <span style={{ fontSize: "1em", color: "gray" }}>
              {current_weather.date}
            </span>
          </div>
          <div className="text-center content-center">
            <div
              className="d-inline-block border-bottom text-center content-center "
              style={{
                paddingRight: "10px",
                paddingLeft: "10px",
                backgroundColor: "chartreuse",
              }}
            >
              <div className="font-weight-bold ">{min_max.Min} C</div>
              <div>MIN</div>
            </div>

            <div
              className="d-inline-block border-bottom text-center content-center  bg-info"
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
              <div className="font-weight-bold">{min_max.Avg} C</div>
              <div>MEAN</div>
            </div>

            <div
              className="d-inline-block border-bottom text-center content-center bg-warning"
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
              <div className="font-weight-bold ">{min_max.Max} C</div>
              <div>MAX</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
      </div>

      <div
        className="container text-center justify-content-center mx-auto"
        style={{ marginBottom: "20px" }}
      >
        <div
          style={{ width: "75%" }}
          className="container text-center justify-content-center mx-auto"
        >
          <div className="font-weight-bold" style={{ fontSize: "2em" }}>
            Seven Day Forecast
          </div>
          <div>
            <ForecastChart></ForecastChart>
          </div>
          <div
            className="row text-center content-center"
            style={{ paddingLeft: "37px", paddingRight: "37px" }}
          >
            {week_days.map((item) => (
              <div
                className="d-inline-block col"
                style={{ border: "1px solid" }}
              >
                <div className="font-weight-bold">{Object.keys(item)[0]}</div>
                <div className="text-gray" style={{ fontSize: "0.5em" }}>
                  {Object.values(item)[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Forecast;