import "./App.css";
import Header from "./components/Header";
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
      <Header />
      <section className="work">
        {/* {workArr.map((item) => (
          <Work
            title={item.title}
            alt={item.alt}
            src={item.src}
            link={item.link}
            description={item.description}
          />
        ))} */}
      </section>
    </div>
  );
}

export default App;
