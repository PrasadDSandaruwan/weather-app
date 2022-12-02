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

var monthdate = []
var outliermin = []
var outliermax = []

var temp2016avg = []
var temp2017avg = []
var temp2018avg = []
var temp2019avg = []
var temp2020avg = [] 

var temp2016min = []
var temp2017min = []
var temp2018min = []
var temp2019min = []
var temp2020min = [] 

var temp2016max = []
var temp2017max = []
var temp2018max = []
var temp2019max = []
var temp2020max = [] 

d3.csv("/autumndaytemp.csv",function(data1){
    monthdate.push(data1.monthdate)
    outliermin.push(data1.outliermin)
    outliermax.push(data1.outliermax)

    temp2016avg.push(data1.yr2016avg)
    temp2017avg.push(data1.yr2017avg)
    temp2018avg.push(data1.yr2018avg)
    temp2019avg.push(data1.yr2019avg)
    temp2020avg.push(data1.yr2020avg)

    temp2016min.push(data1.yr2016min)
    temp2017min.push(data1.yr2017min)
    temp2018min.push(data1.yr2018min)
    temp2019min.push(data1.yr2019min)
    temp2020min.push(data1.yr2020min)

    temp2016max.push(data1.yr2016max)
    temp2017max.push(data1.yr2017max)
    temp2018max.push(data1.yr2018max)
    temp2019max.push(data1.yr2019max)
    temp2020max.push(data1.yr2020max)
    
});

const AutumnDayTemperatureChart = (props) => {
  const [hour_avg_data, set_hour_avg_data] =
    useState({ datasets: [] });
  const [hour_avg_options, set_hour_avg_options] =
    useState({});

    function selectData(year){
        if (year === '2016'){
            return [temp2016avg, temp2016max, temp2016min]
        }
        else if (year === '2017'){
            return [temp2017avg, temp2017max, temp2017min]
        }
        else if (year === '2018'){
            return [temp2018avg, temp2018max, temp2018min]
        }
        else if (year === '2019'){
            return [temp2019avg, temp2019max, temp2019min]
        }
        else if (year === '2020'){
            return [temp2020avg, temp2020max, temp2020min]
        }
    }


  useEffect(() => {
    const position = "top"; // CSS for graphs
    console.log(props.year)
    set_hour_avg_data({
        labels: monthdate,
        datasets: [
          {
            fill: false, //for area chart
            borderColor: "rgba(0, 0, 0, 0.9)",
            borderWidth: 3,
            // backgroundColor: "rgba(255, 48, 71, 0.9)",
            pointRadius: [0],
            pointHitRadius: [0],
            data: outliermin,
            label: "3.38"
          },
          {
            fill: false, //for area chart
            borderColor: "rgba(0, 0, 0, 0.9)",
            borderWidth: 3,
            // backgroundColor: "rgba(255, 48, 71, 0.9)",
            pointRadius: [0],
            pointHitRadius: [0],
            data: outliermax,
            label: "26.78"
          },
          {
            fill: true, //for area chart
            borderColor: "rgba(255, 167, 71, 0.9)",
            borderWidth: 3,
            backgroundColor: "rgba(255, 167, 71, 0.9)",
            data: selectData(props.year)[2],
            label: "min temp"
          },
          {
            fill: true, //for area chart
            borderColor: "rgba(198, 255, 0, 1)",
            borderWidth: 3,
            backgroundColor: "rgba(198, 255, 0, 1)",
            data: selectData(props.year)[0],
            label: "avg temp"
          },
          {
            fill: true, //for area chart
            borderColor: "rgba(255, 48, 71, 0.9)",
            borderWidth: 3,
            backgroundColor: "rgba(255, 48, 71, 0.9)",
            data: selectData(props.year)[1],
            label: "max temp"
          },
                    
        ],
      });

    set_hour_avg_options({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: position },

        // title: {
        //   display: true,
        //   text: "Hourly Average Temperature on a Autumn Day in ",
        //   position: "top",
        // },

      },
      scales: {

        x: {
          grid: {
            display: true
          },
          title: {
            text: "Autumn",
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
          max: 41,
          min: 0,
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
    // <div id="chartbody" class="yrmonchartbody">
      <Line
        id="yrmonchart"
        type='bar'
        data={hour_avg_data}
        options={hour_avg_options}
      />
    // </div>


    // </div>



  );
};

export default AutumnDayTemperatureChart;