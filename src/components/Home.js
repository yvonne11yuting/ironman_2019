import React from 'react';
import { FormattedMessage, FormattedTime, FormattedDate } from "react-intl";

const Home = () => {
  return (
    <main className="main main-no-content">
      <FormattedMessage id="home" description="home"/>
      <div className="time-block">
        <FormattedDate value={new Date()}/>&nbsp;&nbsp;
        <FormattedTime value={new Date()}/>
      </div>
    </main>
  );
};

export default Home;