import React from "react";
import "../assets/css/ExtraWorkContent.css";

// these needs to accept props for each component
export default function ExtraWorkContent({
  role,
  timeFrame,
  problem,
  devProcess,
  tech,
}) {
  return (
    <div className="extra-card-content">
      <div className="top-row">
        <h2 className="no-margin-top">Role</h2>
        <p>{role}</p>
      </div>
      <div className="top-row">
        <h2 className="no-margin-top">Timeframe</h2>
        <p>{timeFrame}</p>
      </div>
      <div className="extra-content-row">
        <div className="extra-content-text">
          <h2>Problem</h2>
          <p id="problem-text">{problem}</p>
        </div>
        <div className="extra-content-text">
          <h2>Process</h2>
          <p>{devProcess}</p>
        </div>
      </div>
      <div className="extra-content-row">
        <ul id="technologies-list">
          {tech.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
