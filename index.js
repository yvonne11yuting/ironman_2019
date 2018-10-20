import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/reducers/index";

import App from "./src/components/app";
import "./src/styles/index.scss";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
