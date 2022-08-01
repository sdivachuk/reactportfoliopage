import React from "react";
import "./style.css";

function Nav() {
  return (
    <div id="bgimg">
      <div id="container">
        <div id="navBar">
        <div>
        <h1 id="navName">Sergey Divachuk</h1>
        </div>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
