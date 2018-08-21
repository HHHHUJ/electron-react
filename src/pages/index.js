import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import asyncComponent from "../components/asyncComponent.jsx";

const Layout = asyncComponent(() => import("./Layout"));
const Home = asyncComponent(() => import("./Home"));
const Comment = asyncComponent(() => import("./Comment"));
const Self = asyncComponent(() => import("./Self"));
const Notfound = asyncComponent(() => import("./404"));
// import Home from './Home';
// import Comment from './Comment';
// import Self from './Self';

export default class Layouts extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Layout></Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/comment" component={Comment} />
            <Route path="/self" component={Self} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
