import React from "react";
import ReactDOM from "react-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost } from '@fortawesome/free-solid-svg-icons';

import { Provider } from "react-redux";
import store from "./src/store";

const { lang: { locale, messages } } = store.getState();
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import ja from "react-intl/locale-data/ja";
addLocaleData([...en, ...zh, ...ja]);


import RootRouter from "./router";
import "./src/styles/index.scss";

library.add(faGhost)

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages}>
      <RootRouter />
    </IntlProvider>
  </Provider>,
  document.getElementById("app")
);
