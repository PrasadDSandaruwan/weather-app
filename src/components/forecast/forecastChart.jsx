import React, { useState, useEffect } from "react";

import { getPrediction } from "../../service/forecastService";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  radius: 0,

  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: {
        display: true,
        text: "Temperature",
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Relative Humidity",
      },
    },
    y3: {
      type: "linear",
      display: true,
      position: "left",
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Solar radiation",
      },
    },
  },
};

const ForecastChart = (props) => {
  // const [all_data, set_all_data] = useState({
  //   dates: [],
  //   huminidy: [],
  //   solar_radiation: [],
  //   temperature: [],
  // });

  // useEffect(() => {
  //   async function fetchCurrentWeatherData() {
  //     let cur_weather = await getPrediction();
  //     set_all_data(cur_weather);
  //   }
  //   fetchCurrentWeatherData().catch(console.error);
  // }, []);

  const all_data = props.all_data;

  return (
    <Line
      options={options}
      data={{
        labels: all_data.dates,
        datasets: [
          {
            label: "Temperature",
            data: all_data.temperature,
            borderColor: "rgb(252, 5, 5)",
            backgroundColor: "rgba(252, 5, 5, 0.5)",
            yAxisID: "y",
          },
          {
            label: "Humidity",
            data: all_data.huminidy,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "y1",
          },
          {
            label: "solar radiation",
            data: all_data.solar_radiation,
            borderColor: "rgb(89, 80, 60,)",
            backgroundColor: "rgba(89, 80, 60, 0.5)",
            yAxisID: "y3",
          },
        ],
      }}
    />
  );
};

export default ForecastChart;
