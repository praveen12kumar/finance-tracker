import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const getStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none",
    color: isActive ? "cadetblue" : "white",
  });
  return (
    <div className="navbar-section">
      <div className="header">
        <h1 className="title">Finance Tracker</h1>
        
      </div>
      <div className="navbar">
        <NavLink style={getStyle} to="/">
          Income Expense Form
        </NavLink>
        <NavLink style={getStyle} to="/income">
          Income
        </NavLink>
        <NavLink style={getStyle} to="/expense">
          Expense
        </NavLink>
        <NavLink style={getStyle} to="saving">
          Savings
        </NavLink>
        <NavLink style={getStyle} to="finance">
          Finance Report
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
