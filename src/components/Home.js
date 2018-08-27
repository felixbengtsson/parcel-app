import React, { Component } from "react";
import jump from "../images/nora_jump.jpg";
import Loading from "./LoadingHOC";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      console.log("loading");
      return null;
    } else {
      return (
        <div className="home">
          <div className="home__welcome">
            <h1>Hello</h1>
            <p>
              Hi! I՚m Nora, a freelance dancer, singer and perfomer working in
              Stockholm & London. Check out my work.
            </p>
          </div>

          <div className="home__hero">
            <div className="bg">
              <img src={jump} alt="" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
