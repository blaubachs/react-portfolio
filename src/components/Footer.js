import React from "react";
import linkedInIcon from "../assets/img/linkedinicon.png";
import githubIcon from "../assets/img/githubicon.png";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <div id="Footer">
      <a href="https://github.com/blaubachs" rel="noreferrer" target="_blank">
        <img alt="github logo" height="50" src={githubIcon} />
      </a>
      <a
        href="https://www.linkedin.com/in/blaubachs/"
        rel="noreferrer"
        target="_blank"
      >
        <img alt="linkedIn" height="50" src={linkedInIcon} />
      </a>
    </div>
  );
}
