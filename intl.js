import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import ja from "react-intl/locale-data/ja";
addLocaleData([...en, ...zh, ...ja]);

import RootRouter from "./router";

const Intl = ({locale, messages}) => {
  return (
    <IntlProvider key={locale} locale={locale} messages={messages}>
      <RootRouter />
    </IntlProvider>
  );
};

export default connect(({lang: { locale, messages }}) => (
  { locale, messages }
))(Intl);