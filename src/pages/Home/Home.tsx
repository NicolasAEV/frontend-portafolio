// import myImgProfile from "../../assets/img/me.png";

import AboutMe from "../About-me/AboutMe";
import ContactMe from "../contact-me/ContactMe";
import Projects from "../projects/Projects";
import Presentation from "./components/presentation/Presentation";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Presentation />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactMe />
      </section>
    </main>
  );
};

export default Home;
