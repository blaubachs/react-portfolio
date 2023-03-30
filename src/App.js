import "./App.css";
import Avatar from "@mui/material/Avatar";
import me from "./assets/img/me.jpg";
function App() {
  return (
    <div className="App">
      <header>
        <h1>developing.this</h1>
        <Avatar alt="Ben Laubach" src={me} sx={{ width: 300, height: 300 }} />
        <p>Bingus</p>
      </header>

      <footer>
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
      </footer>
    </div>
  );
}

export default App;
