// import "./exploratory-analysis.scss";

import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import "./style.css"
import zoomPlugin from 'chartjs-plugin-zoom';

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  zoomPlugin,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Filler
);

const RelativeHumidityYearMonthAverageChart = () => {
  const [year_month_avg_data, set_year_month_avg_data] =
    useState({ datasets: [] });
  const [year_month_avg_options, set_year_month_avg_options] =
    useState({});


  useEffect(() => {
    const position = "top"; // CSS for graphs

    axios.get('http://127.0.0.1:5000/api/v1/user/yearmonthavg', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const res = response.data;
        // console.log(res.year)
        // console.log(res.temperature)

        set_year_month_avg_data({
          labels: res.yearmonth,
          datasets: [
            {
              type: 'line',
              yAxisID: "right-y-axis",
              borderColor: "#badbad",
              borderWidth: 3,
              fill: true,
              backgroundColor: "rgba(186, 120, 203, 0.05)",
              data: res.relhum,
              label: "Relative Humidity"
            },
            {
              // label: "# of Votes",
              type: 'bar',
              yAxisID: "left-y-axis",
              barThickness: 10,
              borderSkipped: false,
              borderWidth: 1,
              barPercentage: 0.1,
              categoryPercentage: 0.5,
              borderRadius: 6,
              backgroundColor: "#1096a5",
              data: res.temp,
              label: 'Temperature'
              //   backgroundColor: [
              //     "rgba(54, 162, 235, 1)",
              //     "rgba(255, 99, 132, 1)",
              //   ],
              //   //   borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
              //   borderWidth: 1,
            },

          ],
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    set_year_month_avg_options({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: position },

        title: {
          display: true,
          text: "Average of Temperature and Relative Humidity by Month of Year",
          position: "top",
        },

        zoom: {
          pan: {
            enabled: true,
            mode: 'xy'
          },
  
          zoom: {
            pinch: {
              enabled: true       // Enable pinch zooming
            },
            wheel: {
              enabled: true,
              modifierKey: 'ctrl'       // Enable wheel zooming
            },
            mode: 'xy',
            drag: {
              enabled: true,
            }
          }
        }
      },
      scales: {

        x: {
          grid: {
            display: true
          },
          title: {
            text: "Year-Month",
            display: true
          },
          //   ticks: {
          //     autoSkip: false,
          //     // maxTicksLimit: 50,
          // },
        },
        "left-y-axis": {
          position: "left",
          grid: {
            borderDash: [8, 6],
            lineWidth: 2
          },
          title: {
            text: "Temperature in Degree Celcius",
            display: true
          }
        },
        "right-y-axis": {
          position: "right",
          grid: {
            display: false
          },
          title: {
            text: 'Relative Humidity',
            display: true
          }

        },
      },
      
    });



  }, []);

  return (

    // <div class="yrmonchart">
    <div id="chartbody" class="yrmonchartbody">
      <Chart
        id="yrmonchart"
        type='bar'
        data={year_month_avg_data}
        options={year_month_avg_options}
      />
    </div>


    // </div>



  );
};

export default RelativeHumidityYearMonthAverageChart;