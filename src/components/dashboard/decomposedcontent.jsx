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


import DecomposedTemperatureChart from "./decomposedgraphs/decomtemp";
import DecomposedRelativeHumidityChart from "./decomposedgraphs/decomrelhum";
import DecomposedPressureChart from "./decomposedgraphs/decompress";
import DecomposedSolarRadiationChart from "./decomposedgraphs/decomsolar";
import AdminNavbar from "../navbar/AdminNavbar";

function DecomposedContent() {

    return (
        <>
            <AdminNavbar />
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, pt: 3, pb: 3 }} style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                {/* style={{backgroundColor:"black"}} */}
                <Typography
                    sx={{ fontFamily: 'Raleway', }}
                    component="h4"
                    variant="h4"
                    // marginBottom={3}
                    marginTop={5}
                    align="center"
                    color="rgba(255, 255, 255, 1)"
                >
                    Additive Decomposition of Weather Data
                </Typography>
                <Grid
                    container
                    rowSpacing={1.5}
                    columnSpacing={5}
                    paddingLeft={15}
                    paddingRight={2}
                    paddingBottom={5}
                >
                    <Grid
                        item
                        md={8}
                        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
                    />


                    <Typography
                        sx={{ fontFamily: 'Raleway', }}
                        component="h6"
                        variant="h6"
                        // marginBottom={3}
                        marginTop={5}
                        marginLeft={70}
                        align="center"
                        color="rgba(255, 255, 255, 1)"
                    >
                        Temperature
                    </Typography>

                    <MainCard
                        style={{ marginLeft: "50px", paddingLeft: "1.5px", paddingRight: "1.5px", width: "1200px", height: "400px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        content={false}
                        sx={{ mt: 2.5 }}
                    >
                        <DecomposedTemperatureChart />
                    </MainCard>

                    <Typography
                        sx={{ fontFamily: 'Raleway', }}
                        component="h6"
                        variant="h6"
                        // marginBottom={3}
                        marginTop={5}
                        marginLeft={70}
                        align="center"
                        color="rgba(255, 255, 255, 1)"
                    >
                        Surface Solar Radiation
                    </Typography>

                    <MainCard
                        style={{ marginLeft: "50px", paddingLeft: "1.5px",paddingRight:"1.5px", width: "1200px", height: "400px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        content={false}
                        sx={{ mt: 2.5 }}
                    >
                        <DecomposedSolarRadiationChart/>
                    </MainCard>

                    <Typography
                        sx={{ fontFamily: 'Raleway', }}
                        component="h6"
                        variant="h6"
                        // marginBottom={3}
                        marginTop={5}
                        marginLeft={70}
                        align="center"
                        color="rgba(255, 255, 255, 1)"
                    >
                        Relative Humidity
                    </Typography>

                    <MainCard
                        style={{ marginLeft: "50px", paddingLeft: "1.5px", paddingRight:"1.5px", width: "1200px", height: "400px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        content={false}
                        sx={{ mt: 2.5 }}
                    >
                        <DecomposedRelativeHumidityChart />
                    </MainCard>


                    <Typography
                        sx={{ fontFamily: 'Raleway', }}
                        component="h6"
                        variant="h6"
                        // marginBottom={3}
                        marginTop={5}
                        marginLeft={70}
                        align="center"
                        color="rgba(255, 255, 255, 1)"
                    >
                        Dewpoint Temperature
                    </Typography>

                    <MainCard
                        style={{ marginLeft: "50px", paddingLeft: "1.5px",paddingRight:"1.5px", width: "1200px", height: "400px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                        content={false}
                        sx={{ mt: 2.5 }}
                    >
                        <DecomposedPressureChart />
                    </MainCard>

                    
                </Grid>

            </Box>

            {/* <Container> */}



            {/* <Copyright /> */}
        </>
    );
}


export default function Dashboard() {
    return <DecomposedContent />;
}
