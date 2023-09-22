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
              <strong>Last Date of Abstract Submissions:</strong> November
              20,2023
            </li>
            <li>
              <strong>Notification of Acceptance</strong> October 01,2023 -
              December 31, 2023
            </li>
            <li>
              <strong>Early Bird Registration Start</strong> October
              01,2023-December 15,2023
            </li>
            <li>
              <strong>Full Paper (Selected) Submission:</strong> October 15,2023
              - January 15,2024
            </li>
            <li>
              <strong>Conference Date:</strong> February 22-24 ,2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
