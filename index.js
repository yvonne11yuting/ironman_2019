import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./src/store";

import RootRouter from "./router";
import "./src/styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById("app")
);
