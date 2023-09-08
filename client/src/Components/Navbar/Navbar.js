import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="#hero" smooth className="text-link">
          <div className="logo">
            <img src={require("./Full-Logo.png")} alt="logo" />
          </div>
        </Link>
        <div className="nav-menu">
          <Link to="#hero" smooth className="text-link">
            <a className="nav-link">Home</a>
          </Link>
          <Link to="#about" smooth className="text-link">
            <a className="nav-link">About</a>
          </Link>
          <Link to="#speakers" smooth className="text-link">
            <a className="nav-link">Speakers</a>
          </Link>
          <Link to="#dates" smooth className="text-link">
            <a className="nav-link">Schedule</a>
          </Link>
          <Link to="#venue" smooth className="text-link">
            <a className="nav-link">Venue</a>
          </Link>
          <Link to="#sponsors" smooth className="text-link">
            <a className="nav-link">Sponsors</a>
          </Link>
          <Link to="#team" smooth className="text-link">
            <a className="nav-link">Our Team</a>
          </Link>
        </div>
        <Link to="" smooth className="text-link">
          <div className="nav-regg">
            <button>Register</button>
          </div>
        </Link>
      </div>
    </BrowserRouter>
  );
}
