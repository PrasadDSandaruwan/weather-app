import React from "react";
import Footer from "../components/footer/footer";
import UserNavbar from "../components/navbar/UserNavbar";

const User = ({ children }) => {
  return (
    <React.Fragment>
      <UserNavbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default User;
