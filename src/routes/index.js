import React, { Component } from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import asyncComponent from "../components/asyncComponent.jsx";

const Home = asyncComponent(() => import("./Home"));

class Routes extends Component {
  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
