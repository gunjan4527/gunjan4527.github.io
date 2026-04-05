import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">GUNJAN KUMAR</h2>

      <ul className="nav-links">

        {/* Active link */}
        <ul className="nav-links">

          <a href="#">Home</a>
          <a href="#data-skills-btn">Data skills</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </ul>
      </ul>
    </nav>
  );
}