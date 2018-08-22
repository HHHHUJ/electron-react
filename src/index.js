import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { Provider } from "react-redux";
import Containers from "./routes/index.js";
import createStore from './redux/createStore';
import "./styles/index.css";

import 'moment';
import 'moment/locale/zh-cn';
// 自定义history，这样可以使用react-router-redux,可以是react router和redux同步
let history = createHashHistory();
const root = document.querySelector("#root");
ReactDOM.render(
  <Provider store={createStore({history})}>
    <Containers history={history}/>
  </Provider>,
  root
);
