import React from "react";
import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
} from "react-router-dom";

interface RouteProps extends ReactRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ children, ...rest }) => {
  return <ReactRoute {...rest} render={() => children} />;
};

export default Route;
