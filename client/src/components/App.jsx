import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SingleView from "./SingleView";
import Update from "./Update";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={SingleView} />
            <Route exact path="/update/:id" component={Update} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
