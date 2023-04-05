import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import WorkCard from "./components/WorkCard";
import CAT from "./assets/img/cattention.png";
import BGP from "./assets/img/Board-Game-Party.png";
import WTA from "./assets/img/wta-home.jpg";
import FadeIn from "./components/FadeIn";
function App() {
  // workArr for necessary info for work cards
  let workArr = [
    {
      title: "CATtention",
      alt: "CATtention",
      src: CAT,
      link: "https://cattention.netlify.app",
      github: "https://github.com/ewaltho/CATtention-front",
      timeFrame: "2 Weeks",
      description: "Full stack productivity app featuring socket.io and React.",
      problem:
        "CATtention is an app for users who struggle with attention, using the pomodoro technique, users can choose an amount of time to work, break, and have trivia questions during breaks. Users can work together, and earn new badges based on time worked.",
      process: "",
      tech: ["Node.js", "MySQL", "Express", "Socket.io", "React"],
      role: "Project Manager / Backend Developer",
    },
    {
      title: "Board Game Party",
      alt: "Board Game Party",
      src: BGP,
      link: "https://bram-g.github.io/Board-Game-Party/",
      github: "https://github.com/Bram-G/Board-Game-Party",
      timeFrame: "1 Week",
      description:
        "Front-end application to find board games based on the user's search criteria.",
      problem:
        "With the rise of technology, family and friend gatherings are becoming more and more dull, and detached. Board Game Party allows users to find a board game for their next gathering.",
      process: "",
      tech: ["MaterialUI", "Board Game Atlas", "HTML", "CSS", "JavaScript"],
      role: "Project Manager / UI/UX",
    },
    {
      title: "Wild Thorn Apothecary",
      alt: "Wild Thorn Apothecary",
      src: WTA,
      link: "https://wildthornapothecary.herokuapp.com/",
      github: "https://github.com/blaubachs/wild-thorn-apothecary",
      timeFrame: "1 Week",
      description: "Full-stack application that utilizes SQL and handlebars.",
      problem:
        "Beginners to holistic remedies can have a hard time finding plants to help with specific benefits. Wild Thorn Apothecary is a web app where a user can see plants curated by the developers to help the user more easily choose a plant.",
      process: "",
      tech: ["MySQL", "Express", "Node.js", "Sessions"],
      role: "Project Manager",
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
              problem={item.problem}
              process={item.process}
              tech={item.tech}
              role={item.role}
            />
          </FadeIn>
        ))}
      </section>

      <About />
      <Footer />
    </div>
  );
}

export default App;
