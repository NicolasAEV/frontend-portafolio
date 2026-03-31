import { motion } from "framer-motion";
import { CiDatabase } from "react-icons/ci";
import {
  DiCode,
  DiCodeBadge,
  DiGitBranch,
  DiNetbeans,
  DiTerminalBadge,
  DiJava
} from "react-icons/di";
import { 
  SiJavascript, 
  SiTypescript, 
  SiAngular, 
  SiReact, 
  SiSpringboot, 
  SiNodedotjs, 
  SiNestjs, 
  SiPostgresql, 
  SiOracle, 
  SiMongodb, 
  SiDocker, 
  SiGithubactions 
} from "react-icons/si";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { fadeInUp, scaleIn } from "../../utils/animations";
import SectionTitle from "./components/section-title/SectionTitle.js";
import SkillCard from "./components/skill-card/SkillCard.js";
import me from "../../assets/img/me.png";

const expertiseData = [
  {
    title: "Frontend Development",
    description: "Building interactive interfaces with Angular and TypeScript, following modern design principles and best practices.",
    logo: <DiCodeBadge />,
    delay: 0.1
  },
  {
    title: "Backend Development",
    description: "Designing and developing robust APIs with NestJS and Spring Boot, implementing scalable microservices patterns.",
    logo: <DiCode />,
    delay: 0.2
  },
  {
    title: "API Integration",
    description: "Experience in integrating third-party services and developing SaaS solutions with optimized data flows.",
    logo: <DiNetbeans />,
    delay: 0.3
  }
];

const skillsData = [
  {
    title: "Frontend",
    logo: <DiCodeBadge />,
    delay: 0.1,
    technologies: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "React", icon: <SiReact /> }
    ]
  },
  {
    title: "Backend",
    logo: <DiTerminalBadge />,
    delay: 0.2,
    technologies: [
      { name: "Java", icon: <DiJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "NestJS", icon: <SiNestjs /> }
    ]
  },
  {
    title: "Databases",
    logo: <CiDatabase />,
    delay: 0.3,
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    title: "DevOps",
    logo: <DiGitBranch />,
    delay: 0.4,
    technologies: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "CI/CD", icon: <SiGithubactions /> }
    ]
  }
];

const AboutMe = () => {
  const { ref: inViewRef } = useScrollAnimation();

  return (
    <section ref={inViewRef} className="text-white py-4">
      <div className="text-left space-y-4">
        <SectionTitle>About Me</SectionTitle>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-3/5 space-y-4">
            <motion.p
              className="text-base opacity-90 text-gray-400"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              I am a Full Stack Developer with over 3 years of experience in
              designing and developing modern, scalable web applications. My
              focus is on creating technological solutions that solve real-world
              problems and enhance the user experience.
            </motion.p>
            <motion.p
              className="text-base opacity-90 text-gray-400"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
            >
              Throughout my career, I have worked on various projects ranging
              from small applications to complex enterprise systems. This has
              allowed me to develop a deep understanding of software
              architectures and agile methodologies.
            </motion.p>
            <motion.p
              className="text-base opacity-90 text-gray-400 mb-10"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >
              I am passionate about staying up-to-date with the latest
              technological trends and applying best practices in software
              development to create high-quality products.
            </motion.p>
            <motion.a
              href="https://drive.google.com/file/d/154WoFlmpPzLEuDCqsC1zftbYFFbiyPc9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 border-2 text-sm border-purple-600 text-white py-2 px-8 rounded-full font-bold hover:bg-transparent hover:text-purple-500 transition-all duration-300 transform hover:scale-105"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.5 }}
            >
              Download CV
            </motion.a>
          </div>

          <motion.div
            className="md:w-2/5 h-52 md:h-96 rounded-full overflow-hidden flex-shrink-0"
            {...scaleIn}
            transition={{ ...scaleIn.transition, delay: 0.4 }}
          >
            <img
              src={me}
              alt="image of the developer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <SectionTitle>My Expertise</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          {expertiseData.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </div>

        <SectionTitle>Technologies &amp; Skills</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {skillsData.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
