import React from "react";
import "../Components/Navbar/Navbar";
import "../Components/Footer/Footer";
import "./registration.css"; // Import your CSS file

export default function Registration() {
  return (
    <div className="register" id="">
      <div className="wrapper-reg">
        <div className="register-top">
          <h1 className="hero-head reg-hero-head">SDCEE 2024</h1>
          <p>International Conference on</p>
          <h5>
            "Sustainable Development in Chemical and Environmental Engineering"
          </h5>
        </div>
        <div className="register-center">
          <h2>Registration Guidelines</h2>
        </div>
        <div className="fee-details">
          <h6>Fee Details:</h6>
          <ul>
            <li>Faculty/Academicians (Indian): INR 5000</li>
            <li>Research Scholars/Students (Indian): INR 3000</li>
            <li>Industrial Participants (Indian): INR 7000</li>
            <li>Foreign Delegates: USD 350</li>
            <li>Listener/Accompanying Person (Indian): INR 2000</li>
          </ul>
          <p>
            *Registration fee includes registration kit, lunch, conference/gala
            dinner, and tea during the conference sessions.
          </p>
        </div>
        <div className="button-container">
          <a href="https://forms.gle/BwTenJaU7qAQLbAw8">
            <button>Link to Register</button>
          </a>
          <br />
          <button>Submission Link</button>
        </div>
        <div className="key-dates">
          <h6>Important Dates:</h6>
          <ul>
            <li>Last Date for Abstract Submission: Nov. 20, 2023</li>
            <li>Notification of Acceptance: Oct. 01, 2023 - Dec. 31, 2023</li>
            <li>Early Bird Registration: Oct. 01, 2023 - Dec. 15, 2023</li>
            <li>
              Full Paper (Selected) Submission: Oct. 15, 2023 - Jan. 15, 2024
            </li>
            <li>Conference Date: February 22-24, 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
