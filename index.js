import React from "react";
import ReactDOM from "react-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

import { Provider } from "react-redux";
import store from "./src/store";

import RootRouter from "./router";
import "./src/styles/index.scss";

library.add(faGhost)

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById("app")
);
