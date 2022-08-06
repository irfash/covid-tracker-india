import React from "react";
import { Link } from "react-router-dom";
import "../sass/navBar.scss";
import { Icon } from "./icon/Icon";
// --------------------------------------------------------------------
export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__barnd-link link">
        <h3 className="logo">Covid Tracking India</h3>
      </Link>
      <div className="navbar__links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/About" className="link">
          About
        </Link>
        <a
          className="git-link "
          href="https://reactrouter.com/docs/en/v6/getting-started/installation"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="icon" icon="gitHub" size="2x" />
        </a>
      </div>
    </nav>
  );
};
