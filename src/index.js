import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

class App extends Component {
  render() {
    return <div />;
  }
}

var mountNode = document.getElementById("root");
ReactDOM.render(<App />, mountNode);
