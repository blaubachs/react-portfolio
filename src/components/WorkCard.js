import React, { useState } from "react";
import ExtraWorkContent from "./ExtraWorkContent";
import "../assets/css/WorkCard.css";

export default function WorkCard({ src, title, description, alt }) {
  // need to find a way to expand this card on click...
  const [cardClicked, setCardClicked] = useState(true);

  const handleCardExpand = (e) => {
    setCardClicked(!cardClicked);
  };

  return (
    <div
      className="work-card parallax"
      id={`${cardClicked && "clicked"}`}
      onClick={handleCardExpand}
    >
      <div className="work-card-image">
        <img src={src} alt={alt} />
      </div>
      {cardClicked && <ExtraWorkContent />}
      <div className="work-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
