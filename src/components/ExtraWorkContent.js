import React from "react";
import "../assets/css/ExtraWorkContent.css";

// these needs to accept props for each component
export default function ExtraWorkContent() {
  return (
    <div className="extra-card-content">
      <div className="extra-content-row">
        <h2 className="no-margin-top">Role</h2>
        <p>Project Manager</p>
      </div>
      <div className="extra-content-row">
        <h2 className="no-margin-top">Timeframe</h2>
        <p>2 Weeks</p>
      </div>
    </div>
  );
}
