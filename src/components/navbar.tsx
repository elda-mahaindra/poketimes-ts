import React, { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: FunctionComponent = () => (
  <nav className="nav-wrapper red darken-3">
    <div className="container">
      <a className="brand-logo" href="/">
        Poke'Times
      </a>
      <ul className="right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
