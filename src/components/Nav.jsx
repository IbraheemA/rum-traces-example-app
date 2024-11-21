import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { generateHandles } from "../generateHandles";

const Nav = () => {
  const sectorProp = () => {
    return `/${generateHandles()}/contact/random`;
  };
  return (
    <div id="nav">
      <span className="navButton" id="homeNav">
        <NavLink to="/">Home</NavLink>
      </span>

      <span className="navButton" id="startNav">
        <NavLink to="/userActionDemo">User Action Demo</NavLink>
      </span>

      <span className="navButton" id="middleNav">
        <NavLink
          to="/resourceDemo"
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}>
          Resource Demo
        </NavLink>
      </span>
    </div>
  );
};

export default withRouter(Nav);
