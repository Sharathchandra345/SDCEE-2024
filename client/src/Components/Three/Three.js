import React from "react";
import "./Three.css";

export default function Three() {
  return (
    <div className="three" id="dates">
      <div className="wrapper">
        <h1>Important Dates</h1>
        <hr />

        <div className="timeline">
          <ul>
            <li>
              <strong>Last Date of Abstract Submissions:</strong>{" "}
              <strike>January 10, 2024</strike>
            </li>
            <li>
              <strong>Notification of Acceptance:</strong>{" "}
              <strike> January 12, 2024</strike>
            </li>
            {/* <li>
              <strong>Early Bird Registration Start:</strong> October
              01,2023-December 15,2023
            </li> */}
            {/* <li>
              <strong>Full Paper (Selected) Submission:</strong> January 30,
              2024
            </li> */}
            <li>
              <strong>Conference Date:</strong> February 22-24, 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
