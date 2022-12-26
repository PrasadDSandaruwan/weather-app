// import "querystring";
import http from "./httpService";
import CONFIG from "../config.json";

// const querystring = require("querystring");

const apiEndpoint = CONFIG.apiUrl + "forecast/";

export async function getCurrentData() {
  const response = await http.get(apiEndpoint + "weather-now");

  console.log(response);

  return response.data;
}

export async function getMinMax() {
  const response = await http.get(apiEndpoint + "min-max");

  console.log("MIN MAX", response);

  return response.data.data;
}

export async function getPrediction() {
  const response = await http.get(apiEndpoint + "next-seven-days");

  console.log("NEXT &", response);

  return response.data;
}

export async function getWeekdays() {
  const response = await http.get(apiEndpoint + "weekdays");

  return response.data;
}

export default {
  getCurrentData,
  getPrediction,
  getMinMax,
  getWeekdays,
};
