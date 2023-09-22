import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter, Route, Switch, Routes, Router } from "react-router-dom";
import Registration from "../../pages/registration";
{
  /* <Routes>
  <Route path="/" element={<Navbar />} />
  <Route path="/register" element={<Registration />} />
</Routes>; */
}

export default function Navbar() {
  return (
    <div className="nav" id="nav">
      <Link to="/" smooth className="text-link">
        <div className="logo">
          <img src={require("./Full-Logo.png")} alt="logo" />
        </div>
      </Link>
      <div className="nav-menu">
        <Link to="/" smooth className="text-link">
          <a className="nav-link">Home</a>
        </Link>
        <Link to="#venue" smooth className="text-link">
          <a className="nav-link">Venue</a>
        </Link>
        <Link to="#speakers" smooth className="text-link">
          <a className="nav-link">Speakers</a>
        </Link>
        <Link to="" smooth className="text-link">
          <a className="nav-link">Abstract Submission</a>
        </Link>
        <Link to="#dates" smooth className="text-link">
          <a className="nav-link">Schedule</a>
        </Link>
        <Link to="#sponsors" smooth className="text-link">
          <a className="nav-link">Sponsors</a>
        </Link>
        <Link to="#team" smooth className="text-link">
          <a className="nav-link">Our Team</a>
        </Link>
      </div>
      <Link to="/register" smooth className="text-link">
        <div className="nav-regg">
          <button>Register</button>
        </div>
      </Link>
    </div>
  );
}
