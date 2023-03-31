import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import linkedInIcon from "./assets/img/linkedinicon.png";
import githubIcon from "./assets/img/githubicon.png";
import WorkCard from "./components/WorkCard";
import CAT from "./assets/img/cattention.png";
import BGP from "./assets/img/Board-Game-Party.png";
import WTA from "./assets/img/wta-home.jpg";
import FadeIn from "./components/FadeIn";
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
      <Header />
      <section className="work">
        <h1>My Work</h1>
        {workArr.map((item) => (
          <FadeIn>
            <WorkCard
              title={item.title}
              src={item.src}
              alt={item.alt}
              link={item.link}
              description={item.description}
            />
          </FadeIn>
        ))}
      </section>

      <div className="icons">
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
      <About />
    </div>
  );
}

export default App;
