import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <span style={{ color: "var(--highlight)" }}>~</span>/
          <img
            src="/assets/pokeball.png"
            alt="pokeball"
            className="poke-ball"
          />
        </Link>
      </div>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/achievements">Achievements</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About Me</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
