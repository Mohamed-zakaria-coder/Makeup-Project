import React from "react";
import { BsList } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <BsList className="navbar-list-icon" onClick={props.showListComp} />
      <NavLink to="/Makeup-Project" className="navLink">
        <h3 className="navbar-heading">Makeup Online</h3>
      </NavLink>
      <BiSearch className="navbar-search-icon" />
    </div>
  );
}
