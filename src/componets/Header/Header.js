import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  return ( 
    <nav>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "activeLink item" : "link item")}
      >
        Home
      </NavLink>
      <NavLink
        to="/detail"
        className={({ isActive }) => (isActive ? "activeLink item" : "link item")}
      >
        Review
      </NavLink>
      <NavLink
        to="/deshboard"
        className={({ isActive }) => (isActive ? "activeLink item" : "link item")}
      >
        DeshBoard
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) => (isActive ? "activeLink item" : "link item")}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "activeLink item" : "link item")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
