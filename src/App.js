import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VisitorInfo from "./components/VisitorInfo";
import WelcomePage from "./components/WelcomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact component={WelcomePage} />
          <Route path="/visitorInfo" component={VisitorInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
