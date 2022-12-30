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

function DashboardContent() {

    const [year, setYear] = useState("hoursolar");

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
                    Seasonal Weather Analysis Dashboard
                </Typography>
                <Grid
                    container
                    rowSpacing={1.5}
                    columnSpacing={5}
                    paddingLeft={10}
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
                        {/* <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                        > */}

                            {/* <Grid item> */}
                                <Stack direction="row" alignItems="center" spacing={1} style={{ marginLeft: "175px", marginTop: "30px" }}>
                                <Button className="mainbtn"
                                        size="large"
                                        onClick={() => setYear("hoursolar")}
                                        color={year === "hoursolar" ? "primary" : "secondary"}
                                        variant={year === "hoursolar" ? "outlined" : "text"}
                                        style={{
                                            fontSize: 14,
                                            fontStyle: "bold",
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            color: "#fff",
                                            borderRadius: "10px",
                                            boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                                            transition: "0.25w",
                                            maxWidth: "300px",
                                            minWidth: "300px",
                                            minHeight: "50px",
                                            maxHeight: "50px"
                                        }}
                                    >
                                        Hourly Average Surface Solar Radiation
                                    </Button>
                                    <Button className="mainbtn"
                                        size="large"
                                        onClick={() => setYear("hourtemp")}
                                        color={year === "hourtemp" ? "primary" : "secondary"}
                                        variant={year === "hourtemp" ? "outlined" : "text"}
                                        style={{
                                            fontSize: 14,
                                            fontStyle: "bold",
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            color: "#fff",
                                            borderRadius: "10px",
                                            boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                                            transition: "0.25w",
                                            maxWidth: "300px",
                                            minWidth: "300px",
                                            minHeight: "50px",
                                            maxHeight: "50px"
                                        }}
                                    >
                                        Hourly Average Temperature
                                    </Button>
                                    <Button className="mainbtn"
                                        size="large"
                                        onClick={() => setYear("daytemp")}
                                        color={year === "daytemp" ? "primary" : "secondary"}
                                        variant={year === "daytemp" ? "outlined" : "text"}
                                        style={{
                                            fontSize: 14,
                                            fontStyle: "bold",
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            color: "#fff",
                                            borderRadius: "10px",
                                            boxShadow: "0px 0px 2px 2px rgb(0,0,0)",
                                            transition: "0.25w",
                                            maxWidth: "300px",
                                            minWidth: "300px",
                                            minHeight: "50px",
                                            maxHeight: "50px"
                                        }}
                                    >
                                        Daily Temperature
                                    </Button>
                                    
                                   
                                    
                                </Stack>
                            {/* </Grid> */}
                        {/* </Grid> */}
                        {/* <Grid item> */}
                        <GraphSelect feature={year} />
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
    return <DashboardContent />;
}
