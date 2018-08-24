import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import asyncComponent from "../components/asyncComponent.jsx";

const Home = asyncComponent(() => import("./Home"));
const Self = asyncComponent(() => import("./Self"));

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/self" component={Self} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
