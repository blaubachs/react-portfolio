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
          With a background in production and experience with process
          engineering at my previous job, I realized I was seeking a more
          rewarding field. With a passion for critical thinking, learning, and
          problem solving, I enrolled the University of Washington's full-stack
          coding bootcamp. This course was excellent in delivering the
          fundamentals of web development to me, and currently I am seeking
          employment in the industry to challenge myself to grow further.
        </p>
        <div id="avatar">
          <Avatar alt="Ben Laubach" src={me} sx={{ width: 300, height: 300 }} />
        </div>
      </div>
      <h2 id="skills-header">My skills...</h2>
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
