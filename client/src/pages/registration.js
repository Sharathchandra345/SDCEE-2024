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
          <h4>
            {" "}
            International Conference on <br /> "Sustainable Development in
            Chemical and <br /> Environmental Engineering"
          </h4>
        </div>
        <div className="register-center">
          <h1>Registration Guidelines</h1>
        </div>
        <div className="fee-details">
          <h2>Fee Details</h2>
          <ul>
            <li>
              <strong>Faculty/Academicians (Indian) </strong> INR 5000
            </li>
            <li>
              <strong>Research Scholars/Students (Indian) </strong> INR 3000
            </li>
            <li>
              <strong>Industrial Participants (Indian) </strong> INR 7000
            </li>
            <li>
              <strong>Foreign Delegates </strong> USD 350
            </li>
            <li>
              <strong>Listener/Accompanying Person (Indian) </strong> INR 2000
            </li>
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
          <h2>Payment Details</h2>
          <p>
            <strong>Name of Beneficiary </strong> Thapar Institute of
            Engineering and Technology
          </p>
          <p>
            <strong>Account Number </strong> 676010011622
          </p>
          <p>
            <strong>Type of A/c </strong> Saving
          </p>
          <p>
            <strong>Bank Name </strong> Kotak Mahindra Bank Ltd.
          </p>
          <p>
            <strong>IFSC Code </strong> KKBK0000263
          </p>
          <p>
            <strong>Swift Code </strong> KKBKINBB
          </p>
          <p>
            <strong>Bank Address </strong> Kotak Mahindra Bank Ltd. Leela
            Bhawan, Patiala, Punjab, India
          </p>
        </div>
        <div className="key-dates">
          <h2>Important Dates:</h2>
          <ul>
            <li>
              <strong>Last Date for Abstract Submission </strong> Nov. 20, 2023
            </li>
            <li>
              <strong>Notification of Acceptance </strong> Oct. 01, 2023 - Dec.
              31, 2023
            </li>
            <li>
              <strong>Early Bird Registration </strong> Oct. 01, 2023 - Dec. 15,
              2023
            </li>
            <li>
              <strong>Full Paper (Selected) Submission </strong> Oct. 15, 2023 -
              Jan. 15, 2024
            </li>
            <li>
              <strong>Conference Date </strong> February 22-24, 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
