import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./src/components/Layout";
import Home from "./src/components/Home";
import Todos from "./src/components/Todos/Todos";
import News from "./src/components/News/News";
import NoMatch from "./src/components/NoMatch";

const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route path="/news" component={News} />
          <Redirect from="/todos/:id" to="/todos"/>
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default RootRouter;
