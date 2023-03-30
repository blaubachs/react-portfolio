import "./App.css";
import Avatar from "@mui/material/Avatar";
import me from "./assets/img/me.jpg";
function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>developing.this</h1>
        <Avatar alt="Ben Laubach" src={me} sx={{ width: 300, height: 300 }} />
        <p>
          Full-stack web developer, musician, and technologist with a passion
          for creative problem solving and furthering my knowledge.
        </p>
        <div className="icons">
          <img
            alt="github logo"
            height="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <img
            alt="linkedIn"
            height="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
