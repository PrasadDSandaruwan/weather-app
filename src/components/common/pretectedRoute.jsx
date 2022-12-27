import React from "react";
import { redirect, Route, useLocation, Navigate } from "react-router-dom";
import Auth from "../../service/authService";

// const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
//   return (
//     <Route
//       exact
//       path={path}
//       {...rest}
//       render={(props) => {
//         if (!Auth.getCurrentUser()) {
//             return redirect()
//         }

//         //   return (
//         //     <Navigate
//         //       to={{
//         //         pathname: "/auth",
//         //         state: { from: props.location },
//         //       }}
//         //     />
//         //   );
//         return Component ? <Component {...props} /> : render(props);
//       }}
//     />
//   );
// };

function ProtectedRoute({ children }) {
  let location = useLocation();

  if (!Auth.getCurrentUser()) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
