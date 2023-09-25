import React from "react";
import "./registration.css";
import "./Abstract.css";
import Pdf from "../Components/CMT Submission Guidelines.pdf";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter, Route, Switch, Routes, Router } from "react-router-dom";

export default function Registration() {
  return (
    <div>
      <div className="nav" id="nav">
        <Link smooth to="/" className="text-link">
          <div className="logo">
            <img
              src={require("../Components/Navbar/Full-Logo.png")}
              alt="logo"
            />
          </div>
        </Link>
        <div className="nav-menu">
          <Link smooth to="/#hero" className="text-link">
            <a className="nav-link">Home</a>
          </Link>
          <Link smooth to="/#venue" className="text-link">
            <a className="nav-link">Venue</a>
          </Link>
          <Link smooth to="/#speakers" className="text-link">
            <a className="nav-link">Speakers</a>
          </Link>
          <Link smooth to="" className="text-link">
            <a className="nav-link">Abstract/Paper Submission</a>
          </Link>
          <Link smooth to="/#dates" className="text-link">
            <a className="nav-link">Schedule</a>
          </Link>
          {/* <Link smooth to="#sponsors" className="text-link">
          <a className="nav-link">Sponsors</a>
        </Link> */}
          <Link smooth to="/#team" className="text-link">
            <a className="nav-link">Our Team</a>
          </Link>
        </div>
        <Link smooth to="/register" className="text-link">
          <div className="nav-regg">
            <button>Register</button>
          </div>
        </Link>
      </div>
      <div className="abstract" id="">
        <div className="wrapper-reg">
          <div className="register-top">
            <h1 className="hero-head reg-hero-head">SDCEE 2024</h1>
          </div>
          <div className="register-center">
            <p className="abs-para">
              Welcome to the abstract submission for the International
              Conference on Sustainable Development in Chemical and
              Environmental Engineering (SDCEE-2024).
            </p>
          </div>
          <div className="topics abs-topics">
            <h4>Conference Themes</h4>
            <p>
              The conference theme is encapsulated in the following subject
              areas, with an openness to explore additional related topics:
            </p>
            <ul>
              <li>
                <strong>Chemical & Process Engineering </strong>
              </li>
              <li>
                <strong>Sustainable Environmental Solutions</strong>
              </li>
              <li>
                <strong>Advancements in Energy Engineering</strong>
              </li>
              <li>
                <strong>Materials in Engineering</strong>
              </li>
              <li>
                <strong>Modeling and Simulation of Processes</strong>
              </li>
              <li>
                <strong>Bioprocessing and Food Engineering</strong>
              </li>
              <li>
                <strong>
                  AI, Machine Learning, and Data Analytics in Process
                  Design/Optimization
                </strong>
              </li>
            </ul>
          </div>
          <div className="register-center">
            <div className="abs-gray">
              <h4>
                We invite authors to submit abstracts (300 words) in PDF, DOC,
                or DOCX format.
              </h4>
            </div>
          </div>
          <div className="abs-links">
            <div className="abs-center">
              <a href={Pdf} target="_blank" className="pdf register-center">
                Submission Guidelines (CMT)
              </a>
            </div>
            <div className="abs-center abs-btn-cont">
              <button className="abs-btn">Abstract/Paper Submission</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
