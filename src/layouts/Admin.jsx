import React from "react";
// import Login from "../components/common/login";

import AdminNavbar from "../components/navbar/AdminNavbar";
import Footer from "../components/footer/footer";

const Admin = ({ children }) => {
  return (
    <React.Fragment>
      <AdminNavbar />
      <main>{children}</main>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Admin;
