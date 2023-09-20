import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="desc">
        <img
          src={require("./TU-logo Footer.png")}
          alt="logo"
          className="logo-footer"
        />
        <p className="para">
          The Department of Chemical Engineering of Thapar Institute of
          Engineering & Technology was established in 1992 with the Ph.D
          programme. In order to ensure a broad-based education, both the theory
          and practical aspects of Chemical Engineering discipline are
          emphasized.
        </p>
      </div>

      <div className="useful-links">
        <div className="useful-links-heading">
          <h5>Useful Links</h5>
          <div className="yellow-line"></div>
        </div>
        <ul className="ul-footer">
          <li>
            <a href="#" className="ftr-links">
              <span className="bullet-point">&#9658;</span> Home
            </a>
            <div className="white-line"></div>
          </li>
          <li>
            <a href="https://ched.thapar.edu/" className="ftr-links">
              <span className="bullet-point">&#9658;</span> About Department
            </a>
            <div className="white-line"></div>
          </li>
          <li>
            <a href="https://www.thapar.edu/" className="ftr-links">
              <span className="bullet-point">&#9658;</span> About The Institute
            </a>
            <div className="white-line"></div>
          </li>
          <li>
            <a href="#" className="ftr-links">
              <span className="bullet-point">&#9658;</span> Abstract Submission
            </a>
            <div className="white-line"></div>
          </li>
          <li>
            <a href="https://forms.gle/BwTenJaU7qAQLbAw8" className="ftr-links">
              <span className="bullet-point">&#9658;</span> Registration Link
            </a>
            <div className="white-line"></div>
          </li>
        </ul>
      </div>
      <div className="contact-us">
        <div className="contact-us-heading">
          <h5>Contact Us</h5>
          <div className="yellow-line"></div>
        </div>
        <ul className="contact-ul">
          <li>Faculty Advisor:</li>
          <li className="yellow-li">Dr. Avinash Chandra</li>
          <li className="yellow-li">Dr. Vivek Pawar</li>
          <li>Phone:</li>
          <li className="yellow-li">+91-9914255295</li>
          <li className="yellow-li">+91-9030417183</li>
          <li>Email:</li>
          <li className="yellow-li"> sdcee2024@thapar.edu</li>
          {/* <li className="yellow-li"> avinash.chandra@thapar.edu</li> */}
        </ul>
      </div>
    </div>
  );
}
