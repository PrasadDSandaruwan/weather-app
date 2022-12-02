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

import SummerDayTemperatureChart from "./summergraphs/summerdaytemp";
import WinterDayTemperatureChart from "./wintergraphs/winterdaytemp";
import SpringDayTemperatureChart from "./springgraphs/springdaytemp";
import AutumnDayTemperatureChart from "./autumngraphs/autumndaytemp";



function DailyAverageTemperatureContent() {

    const [year, setYear] = useState("2016");

    return (
        <>
            <User />
            <Box component="main" sx={{ flex: 1, py: 6, px: 4, pt: 3, pb: 3 }} style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                {/* style={{backgroundColor:"black"}} */}
                {/* <Typography
                    sx={{ fontFamily: 'Raleway', }}
                    component="h4"
                    variant="h4"
                    // marginBottom={3}
                    marginTop={5}
                    align="center"
                    color="rgba(255, 255, 255, 1)"
                >
                    Daily Average Temperature
                </Typography> */}
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
                                <Stack direction="row" alignItems="center" spacing={1} style={{ marginLeft: "450px", marginTop: "30px" }}>
                                    <Button
                                        size="small"
                                        onClick={() => setYear("2016")}
                                        color={year === "2016" ? "primary" : "secondary"}
                                        variant={year === "2016" ? "outlined" : "text"}
                                        style={{
                                            fontSize: 14,
                                            fontStyle: "bold",
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
                                    style={{ width: "600px", paddingRight: "1.5px", height: "350px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                                    content={false}
                                    sx={{ mt: 2.5 }}
                                >
                                    <SummerDayTemperatureChart year={year} />
                                </MainCard>
                            </Grid>
                            <Grid item>
                                <MainCard
                                    style={{ width: "600px", paddingRight: "1.5px", height: "350px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                                    content={false}
                                    sx={{ mt: 2.5 }}
                                >
                                    <WinterDayTemperatureChart year={year} />
                                </MainCard>
                            </Grid>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={5}>
                            <Grid item>
                                <MainCard
                                    style={{ width: "600px", paddingRight: "1.5px", height: "350px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                                    content={false}
                                    sx={{ mt: 2.5 }}
                                >
                                    <AutumnDayTemperatureChart year={year} />
                                </MainCard>
                            </Grid>
                            <Grid item>
                                <MainCard
                                    style={{ width: "600px", paddingRight: "1.5px", height: "350px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                                    content={false}
                                    sx={{ mt: 2.5 }}
                                >
                                    <SpringDayTemperatureChart year={year} />
                                </MainCard>
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>

            </Box>

            {/* <Container> */}



            {/* <Copyright /> */}
        </>
    );
}


export default function Dashboard() {
    return <DailyAverageTemperatureContent />;
}
