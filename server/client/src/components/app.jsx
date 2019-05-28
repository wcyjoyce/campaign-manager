import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Landing from "./landing.jsx"
import Dashboard from "./dashboard.jsx";
import Header from "./header.jsx";
import New from "./surveys/new.jsx";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Header />
            <div>
              <Route path="/" exact component={Landing} />
              <Route path="/surveys" exact component={Dashboard} />
              <Route path="/surveys/new" component={New} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default connect(null, actions)(App);
