import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="react-logo">
        <img src="./src/assets/react.svg"></img>
        <h1 className="title">ReactFacts</h1>
      </div>
      <h3 className="desc">React Course - Project 1</h3>
    </nav>
  );
}

export default Navbar;
