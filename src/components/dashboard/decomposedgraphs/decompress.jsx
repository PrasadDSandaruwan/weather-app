
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';
import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
// import Papa from 'papaparse';
import * as d3 from "d3";
import axios from "axios";

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler)

var date = []

var tempseasonal = []
var tempobserved = []
var temptrend = []

d3.csv("/decomposeddata3.csv", function (data1) {
    // console.log("Hi")


    //   user.push(data.user); 
    date.push(data1.date);
    tempseasonal.push(data1.dewpoint_temperature_trendseasonal);
    tempobserved.push(data1.dewpoint_temperature_observed);
    temptrend.push(data1.dewpoint_temperature_trend);

});


export default function DecomposedPressureChart(props) {

    

    const [hour_avg_data, set_hour_avg_data] =
    useState({ datasets: [] });
  const [hour_avg_options, set_hour_avg_options] =
    useState({});

    useEffect(() => {
        // const position = "top"; // CSS for graphs
        console.log(props.year)

        

        axios.get('http://127.0.0.1:5000/api/v1/user/springsolarbubble', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {


        set_hour_avg_data({
            labels: date,
            datasets: [              
            {
                label: 'Trend',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 48, 71, 0.9)',
                borderColor: 'rgba(255, 48, 71, 0.9)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 48, 71, 0.9)',
                pointBackgroundColor: 'rgba(255, 48, 71, 0.9)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 48, 71, 0.9)',
                pointHoverBorderColor: 'rgba(255, 48, 71, 0.9)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: temptrend
            },
            {
                label: 'Seasonal',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(245, 241, 252, 1)',
                borderColor: 'rgba(245, 241, 252, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(245, 241, 252, 1)',
                pointBackgroundColor: 'rgba(245, 241, 252, 1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(245, 241, 252, 1)',
                pointHoverBorderColor: 'rgba(245, 241, 252, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: tempseasonal
            },
            {
                label: 'Observed',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0, 147, 255, 1)', //for the label at the top
                borderColor: 'rgba(0, 147, 255, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0, 147, 255, 1)', //for the graph itself
                pointBackgroundColor: 'rgba(0, 147, 255, 1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(0, 147, 255, 1)',
                pointHoverBorderColor: 'rgba(0, 147, 255, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: tempobserved
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
            plugins: {
                legend: { display: true, position: "top" },

            },
            scales: {

                x: {
                    grid: {
                        display: true
                    },
                    title: {
                        text: "Date",
                        display: true
                    },
                },
                y: {
                    grid: {
                        display: true
                    },
                    title: {
                        text: "Dewpoint Temperature in degree Celcius",
                        display: true
                    },
                    max: 22,
                    min: -1,
                },

            },
          
        });
    
    
    
      }, [props]);

    

    return <Line
        data={hour_avg_data}
        options={hour_avg_options}


    />;
}
