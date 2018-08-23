import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <nav className="navigation">
        <ul>
          <li className="logo">
            <Link to="/">Nora Ullert</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
