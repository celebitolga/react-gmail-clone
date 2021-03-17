import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, mailData, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      mailData !== null ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default GuardedRoute;
