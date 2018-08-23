import React, { Component } from "react";
import { Switch, Route, Redirect, Router,HashRouter } from "react-router-dom";
import asyncComponent from "../components/asyncComponent.jsx";

const Home = asyncComponent(() => import("./Home"));

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
