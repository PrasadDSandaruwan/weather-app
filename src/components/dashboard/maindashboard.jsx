import React from "react";
import { useState, useEffect } from "react";

// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
// import HomeNavbar from "../navbar/HomeNavbar";
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

import HourlyAverageTemperatureContent from "./hourlyavgtemp";
import HourlyAverageSolarContent from "./hourlyavgsolar";
import DailyAverageTemperatureContent from "./dailyavgtemp";
import AdminNavbar from "../navbar/AdminNavbar";

function MainDashboard() {

    const [year, setYear] = useState("hoursolar");

    return (
        <>
            <AdminNavbar/>
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, pt: 3, pb: 3 }} style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                {/* style={{backgroundColor:"black"}} */}
                <Typography
                    sx={{ fontFamily: 'Raleway', }}
                    component="h4"
                    variant="h4"
                    // marginBottom={3}
                    marginTop={5}
                    marginBottom = {4}
                    align="center"
                    color="rgba(255, 255, 255, 1)"
                >
                    Weather Dashboard
                </Typography>
                <Grid
                    container
                    rowSpacing={1.5}
                    columnSpacing={5}
                    // paddingLeft={5}
                    // paddingRight={2}
                    paddingBottom={5}
                >
                    <Grid
                        item
                        md={8}
                        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
                    />

                    {/* row 2 */}
                    <Grid item xs={12} md={12} lg={6}>

                        <iframe title="maindash - Page 1" width="1300" height="630" align="left"
                            src="https://app.powerbi.com/view?r=eyJrIjoiZmVkNDY2MDAtMWQyNC00N2M4LTlmZDMtODk4ZjA1ZDlmMTRkIiwidCI6ImFhYzBjNTY0LTZjNWUtNGIwNS04ZGMzLTQwODA4N2Y3N2Y3NiIsImMiOjEwfQ%3D%3D"
                            frameborder="0" allowFullScreen="true">                        
                        </iframe>

                        {/* <MainCard
                                style={{ paddingRight: "1.5px", width: "1500px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                                content={false}
                                sx={{ mt: 2.5 }}
                            >
                                <GraphSelect feature={year} />
                            </MainCard> */}
                        {/* </Grid> */}

                    </Grid>
                </Grid>

            </Box>

            {/* <Container> */}



            {/* <Copyright /> */}
        </>
    );
}

function GraphSelect({ feature }) {
    console.log("Temp")

    switch (feature) {
        case "hourtemp":
            console.log("Temp99")
            return <HourlyAverageTemperatureContent />;
        case "hoursolar":
            console.log("Wind case")
            return <HourlyAverageSolarContent />
        case "daytemp":
            console.log("Wind case")
            return <DailyAverageTemperatureContent />
        default:
            return null;
    }
}


export default function Dashboard() {
    return <MainDashboard />;
}
