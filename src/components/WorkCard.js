import React from "react";
import "../assets/css/WorkCard.css";

export default function WorkCard({ src, title, description, alt }) {
  return (
    <div className="work-card parallax">
      <div className="work-card-image">
        <img src={src} alt={alt} />
      </div>
      <div className="work-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
