import React from "react";
import "../assets/css/About.css";
import Avatar from "@mui/material/Avatar";
import me from "../assets/img/me.jpg";

export default function About() {
  return (
    <div id="about-me">
      <h1>About</h1>
      <div className="row">
        <p>
          Here is s a bunch of random fake text that I am going to fill this
          section with so that I may fill it up in the future with more
          information about me that a future employer may want to see, whatever
          this is for now, I really do be just writing though.
        </p>
        <div id="avatar">
          <Avatar alt="Ben Laubach" src={me} sx={{ width: 300, height: 300 }} />
        </div>
      </div>
      <h2>My skills...</h2>
      <div className="row">
        <div id="skills-div">
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
          </ul>
          <ul className="skills-list">
            <li>MongoDB</li>
            <li>Handlebars</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>And more...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
