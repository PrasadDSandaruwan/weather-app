// import "./exploratory-analysis.scss";

import React, { useState, useEffect } from "react";
// import { Line } from 'react-chartjs-2';
import { Bubble } from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import * as d3 from "d3";
import zoomPlugin from 'chartjs-plugin-zoom';
import axios from "axios";

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

const SpringHourlyAvgSolarChart = (props) => {
  const [hour_avg_data, set_hour_avg_data] =
    useState({ datasets: [] });
  const [hour_avg_options, set_hour_avg_options] =
    useState({}); 



  useEffect(() => {
    // const position = "top"; // CSS for graphs
    console.log(props.year)
    var year = props.year
    // console.log(selectData(props.year))

    axios.get('http://127.0.0.1:5000/api/v1/user/springsolarbubble', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res[year])
        console.log("heyyy")
        // console.log(res.temperature)


        set_hour_avg_data({
            // labels: hours,
            datasets: [
              {
                fill: true, //for area chart
                borderColor: 'rgba(0, 167, 0, 1)',
                borderWidth: 3,
                backgroundColor: 'rgba(0, 167, 0, 0.6)',
                // backgroundColor: "rgba(186, 120, 203, 0.05)",
                data: res[year],
                label: "spring",
                clip: {left: false, right: false, top: false, bottom: false}
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

    
    set_hour_avg_options({
      responsive: true,
      maintainAspectRatio: false,
      layout:{
        padding:20
      },
      plugins: {
        // legend: { display: true, position: position },

        // title: {
        //   display: true,
        //   text: "Hourly Average Temperature on a Spring Day in ",
        //   position: "top",
        // },

      },
      scales: {

        x: {
          grid: {
            display: true
          },
          title: {
            text: "Hour",
            display: true
          },
          //   ticks: {
          //     autoSkip: false,
          //     // maxTicksLimit: 50,
          // },
        },
        y: {
          grid: {
            display: true
          },
          title: {
            text: "Surface Solar Radiation in W/m2",
            display: true
          },
          max: 1000,
          min: 0
        },
        
      },
      
    });



  }, [props]);

  return (

    // <div class="yrmonchart">
    // <div id="chartbody" class="yrmonchartbody">
      <Bubble
        id="yrmonchart"
        type='bar'
        data={hour_avg_data}
        options={hour_avg_options}
      />
    // </div>


    // </div>



  );
};

export default SpringHourlyAvgSolarChart;