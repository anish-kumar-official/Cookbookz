import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="logo">
        <NavLink className="navlink" to="/home">
          COOKBOOKZ
        </NavLink>
      </div>

      <div className="category">
        <NavLink className="navlink" to="/categories">
          Categories
        </NavLink>
        <NavLink className="navlink" to="/new-blogs">
          What's New
        </NavLink>
      </div>

      <div className="searchWrapper">
        <input className="search" placeholder="Search new blogs/recepies..." />
        <button className="btnsearch">Search</button>
      </div>

      <div className="auth">Sign in</div>
    </div>
  );
};

export default Navbar;
