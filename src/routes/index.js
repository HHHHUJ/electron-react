import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import asyncComponent from "../components/asyncComponent.jsx";

const Home = asyncComponent(() => import("./Home"));
const Self = asyncComponent(() => import("./Self"));
const Point = asyncComponent(() => import("./Point"));
const Toe = asyncComponent(() => import("./Toe"));

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/self" component={Self} />
          <Route path="/point" component={Point} />
          <Route path="/toe" component={Toe} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
