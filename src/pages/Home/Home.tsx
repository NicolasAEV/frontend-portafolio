// import myImgProfile from "../../assets/img/me.png";

import AboutMe from "../About-me/AboutMe";
import ContactMe from "../contact-me/ContactMe";
import Projects from "../projects/Projects";
import Presentation from "./components/presentation/Presentation";

const Home = () => {
  return (
    <>
      <div id="home">
        <Presentation />
      </div>

      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </>
  );
};

export default Home;
