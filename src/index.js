import React from "react";
import ReactDOM from "react-dom";
// import { createHashHistory } from "history";
import { Provider } from "react-redux";
import Pages from "./pages/index.js";
import store from "./redux/store.js";
// import createStore from './redux/createStore';
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";
const root = document.querySelector("#root");
// 自定义history，这样可以使用react-router-redux,可以是react router和redux同步
// let history = createHashHistory();

ReactDOM.render(
  <Provider store={store}>
    <Pages />
  </Provider>,
  root
);

registerServiceWorker();
