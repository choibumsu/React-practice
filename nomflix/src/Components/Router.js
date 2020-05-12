import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Home from "Routes/Home";
import React from "react";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
