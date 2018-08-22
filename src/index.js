import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

class HelloMessage extends React.Component {
  render() {
    return <App />;
  }
}

var mountNode = document.getElementById("root");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
