import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Containers from "./routes/index.js";
import store from './store/index.js';
import "./styles/index.css";

import 'moment';
import 'moment/locale/zh-cn';

const root = document.querySelector("#root");
ReactDOM.render(
  <Provider store={store}>
    <Containers/>
  </Provider>,
  root
);
