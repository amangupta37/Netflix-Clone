import React from "react";
import { Redirect, Route } from "react-router-dom";

const isAuthenticated = window.localStorage.getItem("pageRedirect");

console.log(isAuthenticated);
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
