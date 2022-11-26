// import "./exploratory-analysis.scss";

import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale, BarElement,PointElement,LineElement,Title,Tooltip,Legend,Filler } from 'chart.js';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import * as d3 from "d3";
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

var hours = []
var temp2016 = []
var temp2017 = []
var temp2018 = []
var temp2019 = []
var temp2020 = [] 

d3.csv("/autumnhrtemp.csv",function(data1){
    hours.push(data1.hour)
    temp2016.push(data1.yr2016)
    temp2017.push(data1.yr2017)
    temp2018.push(data1.yr2018)
    temp2019.push(data1.yr2019)
    temp2020.push(data1.yr2020)
    
});

const AutumnHourlyAvgTempChart = (props) => {
  const [hour_avg_data, set_hour_avg_data] =
    useState({ datasets: [] });
  const [hour_avg_options, set_hour_avg_options] =
    useState({});

    function selectData(year){
        if (year === '2016'){
            return temp2016
        }
        else if (year === '2017'){
            return temp2017
        }
        else if (year === '2018'){
            return temp2018
        }
        else if (year === '2019'){
            return temp2019
        }
        else if (year === '2020'){
            return temp2020
        }
    }


  useEffect(() => {
    // const position = "top"; // CSS for graphs
    console.log(props.year)
    set_hour_avg_data({
        labels: hours,
        datasets: [
          {
            fill: true, //for area chart
            borderColor: "#badbad",
            borderWidth: 3,
            backgroundColor: "rgba(186, 120, 203, 0.05)",
            data: selectData(props.year),
            label: props.year
          },
          
        ],
      });

    set_hour_avg_options({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        // legend: { display: true, position: position },

        // title: {
        //   display: true,
        //   text: "Hourly Average Temperature on a Autumn Day in ",
        //   position: "top",
        // },

        zoom: {
          pan: {
            enabled: true,
            mode: 'y'
          },
  
          zoom: {
            pinch: {
              enabled: true       // Enable pinch zooming
            },
            wheel: {
              enabled: true,
              modifierKey: 'ctrl'       // Enable wheel zooming
            },
            mode: 'y',
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
            text: "Temperature in Degree Celcius",
            display: true
          },
          max: 21,
          min: 11
        },
        // "left-y-axis": {
        //   position: "left",
        //   grid: {
        //     borderDash: [8, 6],
        //     lineWidth: 2
        //   },
        //   title: {
        //     text: "Temperature in Degree Celcius",
        //     display: true
        //   }
        // },
        // "right-y-axis": {
        //   position: "right",
        //   grid: {
        //     display: false
        //   },
        //   title: {
        //     text: 'Relative Humidity',
        //     display: true
        //   }

        // },
      },
      
    });



  }, [props]);

  return (

    // <div class="yrmonchart">
    <div id="chartbody" class="yrmonchartbody">
      <Line
        id="yrmonchart"
        type='bar'
        data={hour_avg_data}
        options={hour_avg_options}
      />
    </div>


    // </div>



  );
};

export default AutumnHourlyAvgTempChart;