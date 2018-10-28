import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./src/components/Layout";
import Home from "./src/components/Home";
import Todos from "./src/components/Todos";
import News from "./src/components/News";
import NoMatch from "./src/components/NoMatch";

const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={Todos} />
          <Route path="/news" component={News} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RootRouter;
