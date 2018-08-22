import React, { Component } from "react";
import Header from "./Header";
import Loading from "./Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return <Loading />; // render null when app is not ready
    }

    return <div>I'm the app</div>;
  }
}

export default App;
