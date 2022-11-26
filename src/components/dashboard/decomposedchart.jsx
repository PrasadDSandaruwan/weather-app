import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
// import Papa from 'papaparse';
import * as d3 from "d3";

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler)



var date = []
var trend2010 = []
var trend2011 = []
var trend2012 = []
var trend2013 = []
var trend2014 = []
var trend2015 = []
var trend2016 = []
var trend2017 = []
var trend2018 = []
var trend2019 = []
var trend2020 = []

// var tempseasonal = []
// var tempobserved = []
// var temptrend = []

// var relhumseasonal = []
// var relhumobserved = []
// var relhumtrend = []

// var solarseasonal = []
// var solarobserved = []
// var solartrend = []

// var thermalseasonal = []
// var thermalobserved = []
// var thermaltrend = []



d3.csv("/reldf.csv", function (data1) {
    // console.log("Hi")


    //   user.push(data.user); 
    date.push(data1.day);
    // tempseasonal.push(data1.mean_sea_level_pressure_trendseasonal);
    // tempobserved.push(data1.mean_sea_level_pressure_observed);
    // temptrend.push(data1.mean_sea_level_pressure_trend);

    // relhumseasonal.push(data1.relative_humidity_trendseasonal);
    // relhumobserved.push(data1.relative_humidity_observed);
    // relhumtrend.push(data1.relative_humidity_trend);

    // solarseasonal.push(data1.surface_solar_radiation_trendseasonal);
    // solarobserved.push(data1.surface_solar_radiation_observed);
    // solartrend.push(data1.surface_solar_radiation_trend);

    // thermalseasonal.push(data1.surface_thermal_radiation_trendseasonal);
    // thermalobserved.push(data1.surface_thermal_radiation_observed);
    // thermaltrend.push(data1.surface_thermal_radiation_trend);


    trend2010.push(data1.trend2010);
    trend2011.push(data1.trend2011);
    trend2012.push(data1.trend2012);
    trend2013.push(data1.trend2013);
    trend2014.push(data1.trend2014);
    trend2015.push(data1.trend2015);
    trend2016.push(data1.trend2016);
    trend2017.push(data1.trend2017);
    trend2018.push(data1.trend2018);
    trend2019.push(data1.trend2019);
    trend2020.push(data1.trend2020);

});

// function setDataObserved(data){
  
//     if (data === 'temperature'){
//         return tempobserved;
//     }
//     else if (data === 'relative_humidity'){
//         return relhumobserved;
//     }
//     else if (data === 'surface_solar_radiation'){
//         return solarobserved;
//     }
//     return thermalobserved;
  
// }

// function setDataSeasonal(data){
  
//     if (data === 'temperature'){
//         return tempseasonal;
//     }
//     else if (data === 'relative_humidity'){
//         return relhumseasonal;
//     }
//     else if (data === 'surface_solar_radiation'){
//         return solarseasonal;
//     }
//     return thermalseasonal;
  
// }

// function setDataTrend(data){
  
//     if (data === 'temperature'){
//         return temptrend;
//     }
//     else if (data === 'relative_humidity'){
//         return relhumtrend;
//     }
//     else if (data === 'surface_solar_radiation'){
//         return solartrend;
//     }
//     return thermaltrend;
  
// }
  

export default function DecomposedChart(props) {
    
    // var data = {
    //     labels: date,
    //     datasets: [
    //         {
    //             label: 'Observed',
    //             fill: false,
    //             lineTension: 0.1,
    //             backgroundColor: 'rgba(75,192,192,0.5)', //for the label at the top
    //             borderColor: 'rgba(75,192,192,0.5)',
    //             borderCapStyle: 'butt',
    //             borderDash: [],
    //             borderDashOffset: 0.0,
    //             borderJoinStyle: 'miter',
    //             pointBorderColor: 'rgba(75,192,192,0.5)', //for the graph itself
    //             pointBackgroundColor: 'rgba(75,192,192,0.5)',
    //             pointBorderWidth: 1,
    //             pointHoverRadius: 5,
    //             pointHoverBackgroundColor: 'rgba(75,192,192,0.5)',
    //             pointHoverBorderColor: 'rgba(75,192,192,0.5)',
    //             pointHoverBorderWidth: 2,
    //             pointRadius: 1,
    //             pointHitRadius: 10,
    //             data: setDataObserved(props.slot)
    //         },
    //         {
    //             label: 'Seasonal',
    //             fill: false,
    //             lineTension: 0.1,
    //             backgroundColor: 'rgba(0,0,0,0.5)',
    //             borderColor: 'rgba(0,0,0,0.5)',
    //             borderCapStyle: 'butt',
    //             borderDash: [],
    //             borderDashOffset: 0.0,
    //             borderJoinStyle: 'miter',
    //             pointBorderColor: 'rgba(0,0,0,0.5)',
    //             pointBackgroundColor: 'rgba(0,0,0,0.5)',
    //             pointBorderWidth: 1,
    //             pointHoverRadius: 5,
    //             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //             pointHoverBorderColor: 'rgba(220,220,220,1)',
    //             pointHoverBorderWidth: 2,
    //             pointRadius: 1,
    //             pointHitRadius: 10,
    //             data: setDataSeasonal(props.slot)
    //         },
    //         {
    //             label: 'Trend',
    //             fill: false,
    //             lineTension: 0.1,
    //             backgroundColor: 'rgba(255,0,0,0.2)',
    //             borderColor: 'rgba(255,0,0,0.2)',
    //             borderCapStyle: 'butt',
    //             borderDash: [],
    //             borderDashOffset: 0.0,
    //             borderJoinStyle: 'miter',
    //             pointBorderColor: 'rgba(255,0,0,1)',
    //             pointBackgroundColor: 'rgba(255,0,0,1)',
    //             pointBorderWidth: 1,
    //             pointHoverRadius: 5,
    //             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //             pointHoverBorderColor: 'rgba(220,220,220,1)',
    //             pointHoverBorderWidth: 2,
    //             pointRadius: 1,
    //             pointHitRadius: 10,
    //             data: setDataTrend(props.slot)
    //         }
    //     ]
    // };
    var data = {
        labels: date,
        datasets: [
            {
                label: '2010',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.5)', //for the label at the top
                borderColor: 'rgba(75,192,192,0.5)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,0.5)', //for the graph itself
                pointBackgroundColor: 'rgba(75,192,192,0.5)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,0.5)',
                pointHoverBorderColor: 'rgba(75,192,192,0.5)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2010
            },
            {
                label: '2011',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderColor: 'rgba(0,0,0,0.5)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0,0,0,0.5)',
                pointBackgroundColor: 'rgba(0,0,0,0.5)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2011
            },
            {
                label: '2012',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(220,20,60,0.2)',
                borderColor: 'rgba(220,20,60,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(220,20,60,1)',
                pointBackgroundColor: 'rgba(220,20,60,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2012
            },
            {
                label: '2013',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,140,0,0.2)',
                borderColor: 'rgba(255,140,0,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255,140,0,1)',
                pointBackgroundColor: 'rgba(255,140,0,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2013
            },
            {
                label: '2014',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(218,165,32,0.2)',
                borderColor: 'rgba(218,165,32,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(218,165,32,1)',
                pointBackgroundColor: 'rgba(218,165,32,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2014
            },
            {
                label: '2015',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,255,0,0.2)',
                borderColor: 'rgba(255,255,0,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255,255,0,1)',
                pointBackgroundColor: 'rgba(255,255,0,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2015
            },
            {
                label: '2016',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(124,252,0,0.2)',
                borderColor: 'rgba(124,252,0,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(124,252,0,1)',
                pointBackgroundColor: 'rgba(124,252,0,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2016
            },
            {
                label: '2017',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0,128,128,0.2)',
                borderColor: 'rgba(0,128,128,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0,128,128,1)',
                pointBackgroundColor: 'rgba(0,128,128,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2017
            },
            {
                label: '2018',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0,191,255,0.2)',
                borderColor: 'rgba(0,191,255,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0,191,255,1)',
                pointBackgroundColor: 'rgba(0,191,255,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2018
            },
            {
                label: '2019',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(139,0,139,0.2)',
                borderColor: 'rgba(139,0,139,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(139,0,139,1)',
                pointBackgroundColor: 'rgba(139,0,139,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2019
            },
            {
                label: '2020',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,105,180,0.2)',
                borderColor: 'rgba(255,105,180,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255,105,180,1)',
                pointBackgroundColor: 'rgba(255,105,180,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: trend2020
            }
        ]
    };
    return <Line
        data={data}
        // width={100}
        height={100}
        width={300} //300
        options={{
            plugins: {
                subtitle: {
                    display: true,
                    text: 'Additive Decomposition of Temperature',
                    font: {
                        size: 22
                    }
                }
            },
            // title: {
            //     display: true,
            //     text: 'Additive Decomposition of Temperature',
            // },
            // legend: {
            //     position: 'bottom'
            // },
            // maintainAspectRatio: false
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Relative Humidity'
                    }
                },
                x: {
                    title: { 
                        display: true,
                        text: 'Day in Year'
                    }
                },                               
                // xAxis: [{
                //     type: 'date',
                //     ticks: {
                //         // autoSkip: true,
                //         maxTicksLimit: 50,
                //     },
                //     title: {
                //         display: true,
                //         text: 'Date'
                //     }
                // }],
                yAxis: [{
                    type: 'float',
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 50,
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Degree Celcius'
                    // }
                }],
            }
        }}


    />;
}
