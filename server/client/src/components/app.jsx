import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./landing.jsx"
import Dashboard from "./dashboard.jsx";
import Header from "./header.jsx";
import New from "./new.jsx";

class App extends Component {
  render() {
    return (
      <div className="content">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={New} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
