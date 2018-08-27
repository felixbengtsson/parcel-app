import React, { Component } from "react";
import Loading from "./Loading";

export default function withSubscription(Comp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      this.setState({ isLoading: false });
    }

    render() {
      if (this.state.isLoading) {
        console.log("loading....");
        return <Loading />;
      } else {
        return <Comp />;
      }
    }
  };
}
