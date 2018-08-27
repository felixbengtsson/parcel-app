import React from "react";
import fall from "../images/nora_fall.jpg";
import Loading from "./LoadingHOC";

const Projects = () => {
  return (
    <div className="home">
      <div className="home__welcome">
        <h1>Projects</h1>
        <p>
          Hi! I՚m Nora, a freelance dancer, singer and perfomer working in
          Stockholm & London. Check out my work.
        </p>
      </div>

      <div className="home__hero">
        <img src={fall} alt="" />
      </div>
    </div>
  );
};

export default Loading(Projects);
