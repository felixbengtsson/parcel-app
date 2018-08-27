import React from "react";
import Move from "../images/nora_move.jpg";
import Loading from "./LoadingHOC";

const About = () => {
  return (
    <div className="home">
      <div className="home__welcome">
        <h1>About</h1>
        <p>
          Hi! I՚m Nora, a freelance dancer, singer and perfomer working in
          Stockholm & London. Check out my work.
        </p>
      </div>

      <div className="home__hero">
        <img src={Move} alt="" />
      </div>
    </div>
  );
};

export default Loading(About);
