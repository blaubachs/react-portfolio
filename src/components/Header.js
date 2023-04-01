import React from "react";

import "../assets/css/Header.css";
import resume from "../assets/img/Ben_Laubach.pdf";

export default function Header() {
  return (
    <header className="hero">
      <nav>
        <ul className="nav-list">
          <li>
            <a className="nav-list-item" href="#about-me">
              about
            </a>
          </li>
          <li>
            <a className="nav-list-item" href={resume} download>
              resume
            </a>
          </li>
          <li id="contact">
            <a
              className="nav-list-item"
              href="https://calendly.com/blaubachs"
              target="_blank"
              rel="noreferrer"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
      <h1 id="name">Ben Laubach</h1>
      <div className="header-avatar">
        <p>
          Full-stack web developer, musician, and technologist with a passion
          for creative problem solving and furthering my knowledge.
        </p>
      </div>
    </header>
  );
}
