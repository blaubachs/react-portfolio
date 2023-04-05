import React from "react";
import "../assets/css/ExtraWorkContent.css";

// these needs to accept props for each component
export default function ExtraWorkContent() {
  return (
    <div className="extra-card-content">
      <div className="top-row">
        <h2 className="no-margin-top">Role</h2>
        <p>Project Manager</p>
      </div>
      <div className="top-row">
        <h2 className="no-margin-top">Timeframe</h2>
        <p>2 Weeks</p>
      </div>
      <div className="extra-content-row">
        <div className="extra-content-text">
          <h2>Problem</h2>
          <p>Problem statement from presentation</p>
        </div>
        <div className="extra-content-text">
          <h2>Process</h2>
          <p>Development process</p>
        </div>
      </div>
      <div className="extra-content-row">
        <ul></ul>
      </div>
    </div>
  );
}
