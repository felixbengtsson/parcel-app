import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from "./Loading";
import "../style.scss";

class App extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  }

  render() {
    if (this.state.isLoading) {
      console.log("loading");
      return <div>loading</div>;
    } else {
      return (
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
