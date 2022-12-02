import React, { Component } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./components/common/login";
import SignUp from "./components/common/signup";
import Home from "./components/Home";
import DashboardContent from "./components/dashboard/dashboard2";
import DailyAverageTemperatureContent from "./components/dashboard/dailyavgtemp";
// import HomeNavbar from "./components/navbar/HomeNavbar";
// import RoutesMap from "./components/common/RoutesMap";
// import Admin from "./layouts/Admin";
// import Auth from "./layouts/Auth";
// import User from "./layouts/User";

// const RoutesMap = ({ component: Component, layout: Layout, ...rest }) => {
//   <Route
//     {...rest}
//     render={(props) => {
//       <Layout>
//         <Component {...props}></Component>
//       </Layout>;
//     }}
//   ></Route>;
// };

export class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/admin"
            render={(props) => {
              <Admin>
                <Login {...props}></Login>
              </Admin>;
            }}
          ></Route> */}
          {/* <Route path="/admin" render={(props) => <Admin {...props}></Admin>} /> */}
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/auth" element={<Auth />} /> */}
          {/* <Route path="/" element={<User />} /> */}
          {/* <Navigate to="/" /> */}
          {/* <Admin></Admin> */}
          {/* <Route path="/auth" render={(props) => <Auth {...props}></Auth>} />
          <Route path="/" render={(props) => <User {...props} />} /> */}
          <Route path="/register" element={<SignUp />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/minidash" element={<DailyAverageTemperatureContent/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
