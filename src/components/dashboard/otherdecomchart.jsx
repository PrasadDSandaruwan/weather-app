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

var tempseasonal = []
var tempobserved = []
var temptrend = []

var relhumseasonal = []
var relhumobserved = []
var relhumtrend = []

var solarseasonal = []
var solarobserved = []
var solartrend = []

var thermalseasonal = []
var thermalobserved = []
var thermaltrend = []



d3.csv("/decomposeddata3.csv", function (data1) {
    // console.log("Hi")


    //   user.push(data.user); 
    date.push(data1.date);
    tempseasonal.push(data1.temperature_trendseasonal);
    tempobserved.push(data1.temperature_observed);
    temptrend.push(data1.temperature_trend);

    relhumseasonal.push(data1.relative_humidity_trendseasonal);
    relhumobserved.push(data1.relative_humidity_observed);
    relhumtrend.push(data1.relative_humidity_trend);

    solarseasonal.push(data1.surface_solar_radiation_trendseasonal);
    solarobserved.push(data1.surface_solar_radiation_observed);
    solartrend.push(data1.surface_solar_radiation_trend);

    thermalseasonal.push(data1.surface_thermal_radiation_trendseasonal);
    thermalobserved.push(data1.surface_thermal_radiation_observed);
    thermaltrend.push(data1.surface_thermal_radiation_trend);

});

function setDataObserved(data){
  
    if (data === 'temperature'){
        return tempobserved;
    }
    else if (data === 'relative_humidity'){
        return relhumobserved;
    }
    else if (data === 'surface_solar_radiation'){
        return solarobserved;
    }
    return thermalobserved;
  
}

function setDataSeasonal(data){
  
    if (data === 'temperature'){
        return tempseasonal;
    }
    else if (data === 'relative_humidity'){
        return relhumseasonal;
    }
    else if (data === 'surface_solar_radiation'){
        return solarseasonal;
    }
    return thermalseasonal;
  
}

function setDataTrend(data){
  
    if (data === 'temperature'){
        return temptrend;
    }
    else if (data === 'relative_humidity'){
        return relhumtrend;
    }
    else if (data === 'surface_solar_radiation'){
        return solartrend;
    }
    return thermaltrend;
  
}
  

export default function OtherDecomChart(props) {
    
    var data = {
        labels: date,
        datasets: [
            {
                label: 'Observed',
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
                data: setDataObserved(props.slot)
            },
            {
                label: 'Seasonal',
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
                data: setDataSeasonal(props.slot)
            },
            {
                label: 'Trend',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,0,0,0.2)',
                borderColor: 'rgba(255,0,0,0.2)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255,0,0,1)',
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: setDataTrend(props.slot)
            }
        ]
    };
    
    return <Line
        data={data}
        // width={100}
        height={80} //100
        width={300}
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
                // y: {
                //     title: {
                //         display: true,
                //         text: 'Relative Humidity'
                //     }
                // },
                // x: {
                //     type: 'time',
                //     ticks: {
                //         autoSkip: true,
                //         maxTicksLimit: 50,
                //     },
                //     title: { 
                //         display: true,
                //         text: 'Date'
                //     }
                // },                               
                xAxis: [{
                    type: 'date',
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 50,
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Date'
                    // }
                }],
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
