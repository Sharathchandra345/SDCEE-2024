import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={require("./Full-Logo.png")} alt="logo" />
      </div>
      <div className="nav-menu">
        <a href="" className="nav-link">
          Home
        </a>
        <a href="" className="nav-link">
          About
        </a>
        <a href="" className="nav-link">
          Speakers
        </a>
        <a href="" className="nav-link">
          Venue
        </a>
        <a href="" className="nav-link">
          Schedule
        </a>
        <a href="" className="nav-link">
          Sponsors
        </a>
        <a href="" className="nav-link">
          Our Team
        </a>
      </div>
      <div className="nav-regg">
        <button>Register</button>
      </div>
    </div>
  );
}
