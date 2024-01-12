import React from "react";
import "./SponsorshipComponent.css";
import spimg from "./download.png";
import spimg2 from "./download (1).png";
const SponsorshipComponent = () => {
  const sponsorImages = [spimg, spimg2];

  const openPDF = () => {
    window.open("path_to_your_pdf", "_blank");
  };

  return (
    <div className="our-sponsors">
      <h2 className="section-heading">Our Sponsors</h2>
      <div className="separator"></div>

      <div className="carousel">
        {sponsorImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sponsor ${index + 1}`}
            className="sponsor-image"
          />
        ))}
        {/* Add more images as per your requirement */}
      </div>
      {/* 
      <button className="sponsorship-button" onClick={openPDF}>
        Sponsorship Options
      </button> */}
    </div>
  );
};

export default SponsorshipComponent;
