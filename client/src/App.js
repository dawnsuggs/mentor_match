import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./pages/Registration";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/users" component={Registration} />
        <Route exact path="/users/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
