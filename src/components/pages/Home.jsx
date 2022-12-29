import React from "react";
import Analyze from "../common/analyse";
import ForecastCard from "../common/ForecastCard";
import Footer from "../footer/footer";
// import Forecast from "../forecast/forecast";
import HomeNavbar from "../navbar/HomeNavbar";

const Home = (props) => {
  return (
    <React.Fragment>
      <HomeNavbar />
      <Analyze></Analyze>
      <ForecastCard></ForecastCard>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
