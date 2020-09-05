import React from "react";
import { Switch } from "react-router-dom";
import Layout from "../layouts/Layout";
import Route from "./Route";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
      </Layout>
    </Switch>
  );
};

export default Routes;
