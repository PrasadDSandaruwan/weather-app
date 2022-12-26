import React from "react";
import { useState, useEffect } from "react";

// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
// import HomeNavbar from "../navbar/HomeNavbar";
import User from "../../layouts/User";
import MainCard from "./MainCard";

import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DecomposedChart from "./decomposedchart";
import OtherDecomChart from "./otherdecomchart";

// import YearMonthAverageChart from "./yearmonthavgchart";

import RelativeHumidityYearMonthAverageChart from "./yearmonthavg/relhumyearmonthavg";
import WindSpeedYearMonthAverageChart from "./yearmonthavg/windspeedyearmonthavg";

import SummerHourlyAvgTempChart from "./summergraphs/summerhrtemp";
import AutumnHourlyAvgTempChart from "./autumngraphs/autumnhrtemp";
import WinterHourlyAvgTempChart from "./wintergraphs/winterhrtemp";
import SpringHourlyAvgTempChart from "./springgraphs/springhrtemp";

import SummerHourlyAvgSolarChart from "./summergraphs/summerhrsolar";
import WinterHourlyAvgSolarChart from "./wintergraphs/winterhrsolar";
import AutumnHourlyAvgSolarChart from "./autumngraphs/autumnhrsolar";
import SpringHourlyAvgSolarChart from "./springgraphs/springhrsolar";

import SummerDayTemperatureChart from "./summergraphs/summerdaytemp";
import WinterDayTemperatureChart from "./wintergraphs/winterdaytemp";
import SpringDayTemperatureChart from "./springgraphs/springdaytemp";
import AutumnDayTemperatureChart from "./autumngraphs/autumndaytemp";

// import {
//   GiftOutlined,
//   MessageOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";

// sales report status
const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

function DashboardContent() {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("month");
  const [feature, setFeature] = useState("Temperature");

  const [variable, setVariable] = useState("wind");
  const [year, setYear] = useState("2016");

  return (
    <>
      <User />
      <Box component="main" sx={{ flex: 1, py: 6, px: 4, pt: 3, pb: 3 }}>
        <Typography
          component="h3"
          variant="h3"
          // marginBottom={3}
          marginTop={10}
          align="center"
          color="text.primary"
        >
          Four Season Analysis
        </Typography>
        <Grid
          container
          rowSpacing={1.5}
          columnSpacing={5}
          // paddingLeft={5}
          paddingRight={2}
          paddingBottom={5}
        >
          <Grid
            item
            md={8}
            sx={{ display: { sm: "none", md: "block", lg: "none" } }}
          />

          {/* row 2 */}
          <Grid item xs={12} md={12} lg={6}>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  component="h5"
                  variant="h5"
                  align="center"
                  color="text.primary"
                  paddingTop={5}
                  gutterBottom
                >
                  Summer
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button
                    size="small"
                    onClick={() => setYear("2016")}
                    color={year === "2016" ? "primary" : "secondary"}
                    variant={year === "2016" ? "outlined" : "text"}
                    style={{
                      fontSize: 14,
                      fontStyle: "bold",
                      backgroundColor: "#0a0a23",
                      color: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                      transition: "0.25w",
                    }}
                  >
                    2016
                  </Button>
                  <Button
                    size="small"
                    onClick={() => setYear("2017")}
                    color={year === "2017" ? "primary" : "secondary"}
                    variant={year === "2017" ? "outlined" : "text"}
                    style={{
                      fontSize: 14,
                      fontStyle: "bold",
                      backgroundColor: "#0a0a23",
                      color: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                      transition: "0.25w",
                    }}
                  >
                    2017
                  </Button>
                  <Button
                    size="small"
                    onClick={() => setYear("2018")}
                    color={year === "2018" ? "primary" : "secondary"}
                    variant={year === "2018" ? "outlined" : "text"}
                    style={{
                      fontSize: 14,
                      fontStyle: "bold",
                      backgroundColor: "#0a0a23",
                      color: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                      transition: "0.25w",
                    }}
                  >
                    2018
                  </Button>
                  <Button
                    size="small"
                    onClick={() => setYear("2019")}
                    color={year === "2019" ? "primary" : "secondary"}
                    variant={year === "2019" ? "outlined" : "text"}
                    style={{
                      fontSize: 14,
                      fontStyle: "bold",
                      backgroundColor: "#0a0a23",
                      color: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                      transition: "0.25w",
                    }}
                  >
                    2019
                  </Button>
                  <Button
                    size="small"
                    onClick={() => setYear("2020")}
                    color={year === "2020" ? "primary" : "secondary"}
                    variant={year === "2020" ? "outlined" : "text"}
                    style={{
                      fontSize: 14,
                      fontStyle: "bold",
                      backgroundColor: "#0a0a23",
                      color: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                      transition: "0.25w",
                    }}
                  >
                    2020
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Stack direction="row" alignItems="center" spacing={5}>
              <Grid item>
                <MainCard
                  style={{ width: "400px", paddingRight: "1.5px" , height:"400px"}}
                  content={false}
                  sx={{ mt: 2.5 }}
                >
                  <SummerHourlyAvgSolarChart year={year} />
                </MainCard>
              </Grid>
              <Grid item>
                <MainCard
                  style={{ width: "300px", paddingRight: "1.5px", height:"400px" }}
                  content={false}
                  sx={{ mt: 2.5 }}
                >
                  <SummerHourlyAvgTempChart year={year} />
                </MainCard>
              </Grid>

              <Grid item>
                <MainCard
                  style={{ width: "550px", height:"400px" }}
                  content={false}
                  sx={{ mt: 2.5 }}
                >
                  <SummerDayTemperatureChart year={year} />
                </MainCard>
              </Grid>
            </Stack>
          </Grid>
        </Grid>






        <Grid item spacing={20}>
          <Stack direction="row" alignItems="center" spacing={5}>
            <Button
              size="small"
              onClick={() => setYear("2016")}
              color={year === "2016" ? "primary" : "secondary"}
              variant={year === "2016" ? "outlined" : "text"}
            >
              2016
            </Button>
            <Button
              size="small"
              onClick={() => setYear("2017")}
              color={year === "2017" ? "primary" : "secondary"}
              variant={year === "2017" ? "outlined" : "text"}
            >
              2017
            </Button>
            <Button
              size="small"
              onClick={() => setYear("2018")}
              color={year === "2018" ? "primary" : "secondary"}
              variant={year === "2018" ? "outlined" : "text"}
            >
              2018
            </Button>
            <Button
              size="small"
              onClick={() => setYear("2019")}
              color={year === "2019" ? "primary" : "secondary"}
              variant={year === "2019" ? "outlined" : "text"}
            >
              2019
            </Button>
            <Button
              size="small"
              onClick={() => setYear("2020")}
              color={year === "2020" ? "primary" : "secondary"}
              variant={year === "2020" ? "outlined" : "text"}
            >
              2020
            </Button>
          </Stack>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
        >
          <Grid style={{ width: '200px' }} item sx={{ mx: "auto" }}>
            <Grid item xs={12} md={7} lg={8}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography >Average Hourly Solar Radiation on a Day in {year} Summer</Typography>
                </Grid>

              </Grid>
              <MainCard content={false} sx={{ mt: 1.5 }} style={{ width: "400px", height: "400px", paddingRight: "20px" }}>
                <SummerHourlyAvgSolarChart year={year} />
                {console.log(year)}
              </MainCard>
            </Grid>
          </Grid>

          <Grid item sx={{ mx: "auto" }}>
            <Grid item xs={12} md={7} lg={8}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography >Average Hourly Temperature on a Day in {year} Summer</Typography>
                </Grid>
              </Grid>
              <MainCard content={false} sx={{ mt: 1.5 }} style={{ width: "400px", height: "400px", paddingRight: "20px" }}>
                <SummerHourlyAvgTempChart year={year} />
                {console.log(year)}
              </MainCard>
            </Grid>
          </Grid>

          <Grid item sx={{ mx: "auto" }}>
            <Grid item xs={12} md={7} lg={8}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Typography >Average, Minimum and Maximum Daily Temperatures in {year} Summer</Typography>
                  {/* variant="h5" */}
                </Grid>
              </Grid>
              <MainCard content={false} sx={{ mt: 1.5 }} style={{ width: "600px", height: "400px" }}>
                <SummerDayTemperatureChart year={year} />
                {console.log(year)}
              </MainCard>
            </Grid>
          </Grid>


        </Stack>

      </Box>

      {/* <Container> */}


      <Grid container rowSpacing={5} columnSpacing={5} paddingBottom={5} paddingLeft={5}>
        <Grid item spacing={20}>
          <Stack direction="row" alignItems="center" spacing={5}>
            <Button
              size="small"
              onClick={() => setFeature("Temperature")}
              color={feature === "Temperature" ? "primary" : "secondary"}
              variant={feature === "Temperature" ? "outlined" : "text"}
            >
              Temperature
            </Button>
            <Button
              size="small"
              onClick={() => setFeature("Windspeed")}
              color={feature === "Windspeed" ? "primary" : "secondary"}
              variant={feature === "Windspeed" ? "outlined" : "text"}
            >
              Relative Humidity
            </Button>
            <Button
              size="small"
              onClick={() => setFeature("CloudCover")}
              color={feature === "CloudCover" ? "primary" : "secondary"}
              variant={feature === "CloudCover" ? "outlined" : "text"}
            >
              Surface Solar Radiation
            </Button>
            <Button
              size="small"
              onClick={() => setFeature("Pressure")}
              color={feature === "Pressure" ? "primary" : "secondary"}
              variant={feature === "Pressure" ? "outlined" : "text"}
            >
              Surface Thermal Radiation
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Grid container rowSpacing={1.5} columnSpacing={5} paddingLeft={5} paddingRight={2}>

        <Grid
          item
          md={8}
          sx={{ display: { sm: "none", md: "block", lg: "none" } }}
        />

        {/* row 2 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Additive Decomposition of Temperature</Typography> {/*of {slot}*/}
            </Grid>

          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }} style={{ width: '75rem' }}>
            <DecomposedChart slot={slot} />

            {/* {console.log(feature)} */}
            {/* <GraphSelect feature={feature} slot={slot}/> */}
          </MainCard>
        </Grid>

        {/* row 3 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Additive Decomposition</Typography> {/*of {slot}*/}
            </Grid>
            <Grid item spacing={20}>
              <Stack direction="row" alignItems="center" spacing={5}>
                <Button
                  size="small"
                  onClick={() => setSlot("temperature")}
                  color={slot === "temperature" ? "primary" : "secondary"}
                  variant={slot === "temperature" ? "outlined" : "text"}
                >
                  Temperature
                </Button>
                <Button
                  size="small"
                  onClick={() => setSlot("relative_humidity")}
                  color={slot === "relative_humidity" ? "primary" : "secondary"}
                  variant={slot === "relative_humidity" ? "outlined" : "text"}
                >
                  Relative Humidity
                </Button>
                <Button
                  size="small"
                  onClick={() => setSlot("surface_solar_radiation")}
                  color={slot === "surface_solar_radiation" ? "primary" : "secondary"}
                  variant={slot === "surface_solar_radiation" ? "outlined" : "text"}
                >
                  Surface Solar Radiation
                </Button>
                <Button
                  size="small"
                  onClick={() => setSlot("surface_thermal_radiation")}
                  color={slot === "surface_thermal_radiation" ? "primary" : "secondary"}
                  variant={slot === "surface_thermal_radiation" ? "outlined" : "text"}
                >
                  Surface Thermal Radiation
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }} style={{ width: '75rem' }}>
            <OtherDecomChart slot={slot} />
            {/* {console.log(feature)} */}
            {/* <GraphSelect feature={feature} slot={slot}/> */}
          </MainCard>
        </Grid>

        {/* row 4 */}
        {/* <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Average, Minimum and Maximum Daily Temperatures in {year} Summer</Typography>
            </Grid>
            <Grid item spacing={20}>
              <Stack direction="row" alignItems="center" spacing={5}>
                <Button
                  size="small"
                  onClick={() => setYear("2016")}
                  color={year === "2016" ? "primary" : "secondary"}
                  variant={year === "2016" ? "outlined" : "text"}
                >
                  2016
                </Button>
                <Button
                  size="small"
                  onClick={() => setYear("2017")}
                  color={year === "2017" ? "primary" : "secondary"}
                  variant={year === "2017" ? "outlined" : "text"}
                >
                  2017
                </Button>
                <Button
                  size="small"
                  onClick={() => setYear("2018")}
                  color={year === "2018" ? "primary" : "secondary"}
                  variant={year === "2018" ? "outlined" : "text"}
                >
                  2018
                </Button>
                <Button
                  size="small"
                  onClick={() => setYear("2019")}
                  color={year === "2019" ? "primary" : "secondary"}
                  variant={year === "2019" ? "outlined" : "text"}
                >
                  2019
                </Button>
                <Button
                  size="small"
                  onClick={() => setYear("2020")}
                  color={year === "2020" ? "primary" : "secondary"}
                  variant={year === "2020" ? "outlined" : "text"}
                >
                  2020
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }} style={{ width: '75rem' }}>
            <AutumnDayTemperatureChart year={year} />
            {console.log(year)}
          </MainCard>
        </Grid> */}

        {/* row 5 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Year-Month Averages</Typography> {/*of {slot}*/}
            </Grid>
            <Grid item spacing={20}>
              <Stack direction="row" alignItems="center" spacing={5}>
                {/* <Button
                  size="small"
                  onClick={() => setVariable("dewpt")}
                  color={variable === "dewpt" ? "primary" : "secondary"}
                  variant={variable === "dewpt" ? "outlined" : "text"}
                >
                  Dewpoint Temperature
                </Button> */}
                <Button
                  size="small"
                  onClick={() => setVariable("wind")}
                  color={variable === "wind" ? "primary" : "secondary"}
                  variant={variable === "wind" ? "outlined" : "text"}
                >
                  Wind Speed
                </Button>
                {/* <Button
                  size="small"
                  onClick={() => setVariable("pressure")}
                  color={variable === "pressure" ? "primary" : "secondary"}
                  variant={variable === "pressure" ? "outlined" : "text"}
                >
                  Mean Sea Level Pressure
                </Button> */}
                <Button
                  size="small"
                  onClick={() => setVariable("relhum")}
                  color={variable === "relhum" ? "primary" : "secondary"}
                  variant={variable === "relhum" ? "outlined" : "text"}
                >
                  Relative Humidity
                </Button>
                {/* <Button
                  size="small"
                  onClick={() => setVariable("solar")}
                  color={variable === "solar" ? "primary" : "secondary"}
                  variant={variable === "solar" ? "outlined" : "text"}
                >
                  Surface Solar Radiation
                </Button>
                <Button
                  size="small"
                  onClick={() => setVariable("thermal")}
                  color={variable === "thermal" ? "primary" : "secondary"}
                  variant={variable === "thermal" ? "outlined" : "text"}
                >
                  Surface Thermal Radiation
                </Button> */}
              </Stack>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }} style={{ width: '75rem' }}>
            {console.log(variable)}
            {/* <YearMonthAverageChart variable={variable} /> */}

            <GraphSelect feature={variable} />
          </MainCard>
        </Grid>

        {/* <Grid item xs={12} md={5} lg={4}> */}
        {/* <Grid container alignItems="center" justifyContent="space-between">
            <Grid item paddingLeft={2}>
              <Typography variant="h5">Daily Stats</Typography>
            </Grid>
            <Grid item />
          </Grid> */}
        {/* <MainCard sx={{ mt: 2, ml: 2 }} content={false}> */}
        {/* <Box sx={{ p: 3, pb: 0 }}> */}
        {/* <Statistics feature={feature} /> */}

        {/* </Box> */}
        {/* <MonthlyBarChart /> */}
        {/* </MainCard> */}
        {/* </Grid> */}

        {/* row 3 */}

        {/* row 4 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                Seasonal Change in Temperature{" "}
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="standard-select-currency"
                size="small"
                select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{
                  "& .MuiInputBase-input": { py: 0.5, fontSize: "0.875rem" },
                }}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <MainCard sx={{ mt: 1.75 }}>
            <Stack spacing={1.5} sx={{ mb: -12 }}>

            </Stack>
          </MainCard>
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Overview</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <List sx={{ p: 0, "& .MuiListItemButton-root": { py: 2 } }}>
              <ListItemButton divider>
                <ListItemText primary="Total Number of Aircrafts:" />
                <Typography variant="h6" color="textSecondary">
                  2000
                </Typography>
              </ListItemButton>
              <ListItemButton divider>
                <ListItemText primary="How many can safely take off today?" />
                <Typography variant="h6" color="textSecondary">
                  1540
                </Typography>
              </ListItemButton>
              <ListItemButton divider>
                <ListItemText primary="Resulted aircraft emdangerments for past month:" />
                <Typography variant="h6" color="textSecondary">
                  34
                </Typography>
              </ListItemButton>

            </List>
          </MainCard>
        </Grid>

      </Grid>
      {/* <Copyright /> */}
    </>
  );
}

function GraphSelect({ feature }) {
  console.log("Temp")

  switch (feature) {
    case "relhum":
      console.log("Temp99")
      return <RelativeHumidityYearMonthAverageChart />;
    case "wind":
      console.log("Wind case")
      return <WindSpeedYearMonthAverageChart />
    default:
      return null;
  }
}

//   function Statistics ({feature}){

//     switch (feature) {
//         case "Temperature":
//           console.log("Temp23")
//           return <Stack spacing={2} paddingBottom={4}>
//           {/* <Typography variant="h6" color="textSecondary">
//             Today's Statistics
//           </Typography> */}
//           <AnalyticEcommerce
//             title="Maximum Temperature"
//             count="34.2ºC"
//             percentage={10.3}
//             isLoss="true"
//             extra="1.5°C"
//             state="Temperature"
//             event="decreases"
//           />
//           <AnalyticEcommerce
//             title="Minimum Temperature"
//             count="12.56ºC"
//             percentage={7.3}
//             extra="2°C"
//             state="Temperature"
//             event="increases"
//           />

//           {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
//                       <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
//         </Stack>

//         case "Windspeed":
//             return <Stack spacing={2} paddingBottom={4}>
//             {/* <Typography variant="h6" color="textSecondary">
//               Today's Statistics
//             </Typography> */}
//             <AnalyticEcommerce
//               title="Maximum Wind Speed"
//               count="4.83kmph"
//               percentage={10.3}
//               isLoss="true"
//               extra="2kmph"
//               state="Wind speed"
//               event="decreases"
//             />
//             <AnalyticEcommerce
//              title="Minimum Wind Speed"
//              count="3.83kmph"
//              percentage={7.3}
//              extra="1kmph"
//              state="Wind speed"
//              event="increases"
//             />

//             {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
//                         <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
//            </Stack>
//           case "CloudCover":

//             return <Stack spacing={2} paddingBottom={4}>
//             {/* <Typography variant="h6" color="textSecondary">
//               Today's Statistics
//             </Typography> */}
//             <AnalyticEcommerce
//               title="Maximum Cloud Cover"
//               count="0.85"
//               percentage={0.1}
//               isLoss="true"
//               extra="0.085"
//               state="CloudCover"
//               event="decreases"
//             />
//             <AnalyticEcommerce
//              title="Minimum Cloud Cover"
//              count="0.54"
//              percentage={0.7}
//              extra="0.02"
//              state="CloudCover"
//              event="increases"
//             />

//             {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
//                         <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
//            </Stack>




//           case "Pressure":
//             return <Stack spacing={2} paddingBottom={4}>
//             {/* <Typography variant="h6" color="textSecondary">
//               Today's Statistics
//             </Typography> */}
//             <AnalyticEcommerce
//               title="Maximum Pressure"
//               count="101111.4Pa"
//               percentage={10.3}
//               isLoss="true"
//               extra="100Pa"
//               state="Pressure"
//               event="decreases"
//             />
//             <AnalyticEcommerce
//               title="Minimum Pressure"
//               count="100000Pa"
//               percentage={7.3}
//               extra="200"
//               state="Pressure"
//               event="increases"
//             />

//             {/* <Typography variant="h4">Max Temperature: 34.2°C</Typography>
//                         <Typography variant="h4">Min Temperature: 18.2°C</Typography> */}
//            </Stack>

//               // case "Pressure":
//               //     if(slot=="month"){
//               //         return <MonthlyPressure/>;

//               //     }else{
//               //         return <YearlyPressure />;
//               //     }


//           default:
//               return null;
//   }
//   }



export default function Dashboard() {
  return <DashboardContent />;
}
