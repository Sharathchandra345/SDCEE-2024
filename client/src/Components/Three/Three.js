import React from "react";
import "./Three.css";
import ab from "./AbstractBooklet.png";
export default function Three() {
  return (
    <div className="three" id="dates">
      <div className="wrapper">
        <h1>Important Dates</h1>
        <hr />

        <div className="timeline">
          <ul>
            <li>
            </li>
            <li>
            </li>
            <li>
              <strong>Conference Date:</strong> February 22-24, 2024
            </li>
          </ul>
        </div>
        <div className="schedule" style={{ justifyContent: "center" }}>
          <div className="schedule-button">
            <a
              href="https://cdn.discordapp.com/attachments/1096822198775316490/1209905708292902962/ABSTRACT_BOOKLET_SDCEE.pdf?ex=65e89f7f&is=65d62a7f&hm=a48bd40ea8a38f9440e5098c6447636df5299dee7c55ceb4373a615402ba5311&"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ab}
                alt="Abstract Booklet QR Code"
                className="qrcode"
              />
              <button>Abstract Booklet</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}