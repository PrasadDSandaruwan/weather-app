import React from "react";
import Analyze from "../common/analyse";
import Footer from "../footer/footer";
import HomeNavbar from "../navbar/HomeNavbar";

const Home = (props) => {
  return (
    <React.Fragment>
      <HomeNavbar />
      <Analyze></Analyze>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
