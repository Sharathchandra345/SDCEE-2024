import React from "react";
import "./Hero.css";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter, Route, Switch, Routes, Router } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-head"> SDCEE-2024 </h1>
            <h4>
              {" "}
              International Conference on <br /> "Sustainable Development in
              Chemical and <br /> Environmental Engineering"
            </h4>

            <h3 className="mt-5"> February 22-24, 2024 </h3>
            <Link smooth to="/register" className="text-link">
              <button className="hero-reg mt-3 blink">
                <span>Register</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-right"></div>
      </div>

      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L80,128C160,160,320,224,480,213.3C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
