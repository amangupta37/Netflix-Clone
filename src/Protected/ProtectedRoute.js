import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  authconfirm: userInfo,
  ...rest
}) => {
  const isAuthenticated = window.localStorage.getItem("pageRedirect");
  console.log(isAuthenticated || userInfo);

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
