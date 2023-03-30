import "./App.css";
import Avatar from "@mui/material/Avatar";
import me from "./assets/img/me.jpg";
import Work from "./components/Work";
function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>developing.this</h1>
        <div className="header-avatar">
          <Avatar alt="Ben Laubach" src={me} sx={{ width: 300, height: 300 }} />
          <p>
            Full-stack web developer, musician, and technologist with a passion
            for creative problem solving and furthering my knowledge.
          </p>
        </div>
        <div className="icons">
          <a
            href="https://github.com/blaubachs"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="github logo"
              height="40"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/blaubachs/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="linkedIn"
              height="40"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            />
          </a>
        </div>
      </header>

      <section className="work">
        <Work />
      </section>
    </div>
  );
}

export default App;
