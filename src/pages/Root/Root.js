import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";

import "./Root.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
