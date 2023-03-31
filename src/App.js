import "./App.css";
import Avatar from "@mui/material/Avatar";
import me from "./assets/img/me.jpg";
import resume from "./assets/img/Ben_Laubach.pdf";
import linkedInIcon from "./assets/img/linkedinicon.png";
import githubIcon from "./assets/img/githubicon.png";
import Work from "./components/Work";
import CAT from "./assets/img/cattention.png";
import BGP from "./assets/img/Board-Game-Party.png";
import WTA from "./assets/img/wta-home.jpg";
function App() {
  // todo: workArr for necessary info for work cards
  let workArr = [
    {
      title: "CATtention",
      alt: "CATtention",
      src: CAT,
      link: "https://cattention.netlify.app",
      description: "Full stack productivity app featuring socket.io and React.",
    },
    {
      title: "Board Game Party",
      alt: "Board Game Party",
      src: BGP,
      link: "https://bram-g.github.io/Board-Game-Party/",
      description:
        "Front-end application to find board games based on the user's search criteria.",
    },
    {
      title: "Wild Thorn Apothecary",
      alt: "Wild Thorn Apothecary",
      src: WTA,
      link: "https://wildthornapothecary.herokuapp.com/",
      description: "Full-stack application that utilizes SQL and handlebars.",
    },
  ];

  return (
    <div className="App">
      <header className="hero">
        <nav>
          <ul className="nav-list">
            <li>about</li>
            <li>
              <a href={resume} download>
                Resume
              </a>
            </li>
            <li id="contact">contact</li>
          </ul>
        </nav>
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
      </header>

      <section className="work">
        {workArr.map((item) => (
          <Work
            title={item.title}
            alt={item.alt}
            src={item.src}
            link={item.link}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
