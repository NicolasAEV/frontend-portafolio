import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { CiDatabase } from "react-icons/ci";
import {
  DiCode,
  DiCodeBadge,
  DiGitBranch,
  DiNetbeans,
  DiTerminalBadge,
} from "react-icons/di";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./components/section-title/SectionTitle.js";
import SkillCard from "./components/skill-card/SkillCard.js";
import me from "../../assets/img/me.png";

const AboutMe = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLHeadingElement>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section ref={inViewRef} className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-left space-y-8 ">
        <SectionTitle refProp={sectionRef} controls={controls}>
          About Me
        </SectionTitle>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Descripción */}
          <div className="md:w-3/5 space-y-4">
            <motion.p
              className="text-base opacity-90 text-gray-400"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I am a Full Stack Developer with over 3 years of experience in
              designing and developing modern, scalable web applications. My
              focus is on creating technological solutions that solve real-world
              problems and enhance the user experience.
            </motion.p>
            <motion.p
              className="text-base opacity-90 text-gray-400"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Throughout my career, I have worked on various projects ranging
              from small applications to complex enterprise systems. This has
              allowed me to develop a deep understanding of software
              architectures and agile methodologies.
            </motion.p>
            <motion.p
              className="text-base opacity-90 text-gray-400 mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I am passionate about staying up-to-date with the latest
              technological trends and applying best practices in software
              development to create high-quality products.
            </motion.p>
            {/* Download CV */}
            <motion.a
              href="https://drive.google.com/file/d/1bGMVqtiFzVE81XvG7TKMpQ7R7G8Qe927/view?usp=drive_link"
              target="_blank"
              // rel="noopener noreferrer"
              className="bg-purple-600 border-2 text-sm border-purple-600 text-white py-2 px-8 rounded-full font-bold hover:bg-transparent hover:text-purple-500 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Download CV
            </motion.a>
          </div>

          {/* Imagen */}
          <motion.div
            className="md:w-2/5 h-52 md:h-96 rounded-full overflow-hidden flex-shrink-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={me}
              alt="image of the developer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Expertise */}
        <SectionTitle refProp={sectionRef} controls={controls}>
          My Expertise
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          <SkillCard
            refProp={sectionRef}
            controls={controls}
            title="Frontend Development"
            description="Building interactive interfaces with Angular and TypeScript, following modern design principles and best practices."
            delay={0.1}
            logo={<DiCodeBadge />}
          />
          <SkillCard
            refProp={sectionRef}
            controls={controls}
            title="Backend Development"
            description="Designing and developing robust APIs with NestJS and Spring Boot, implementing scalable microservices patterns."
            delay={0.2}
            logo={<DiCode />}
          />
          <SkillCard
            refProp={sectionRef}
            controls={controls}
            title="API Integration"
            description="Experience in integrating third-party services and developing SaaS solutions with optimized data flows."
            delay={0.3}
            logo={<DiNetbeans />}
          />
        </div>

        {/* Technologies & Skills */}
        <SectionTitle refProp={sectionRef} controls={controls}>
          Technologies & Skills
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <SkillCard
            refProp={sectionRef}
            controls={controls}
            title="Frontend"
            description="JavaScript, TypeScript, Angular, React"
            delay={0.1}
            logo={<DiCodeBadge />}
          />
          <SkillCard
            refProp={sectionRef}
            controls={controls}
            title="Backend"
            description="Java, Spring Boot, NodeJs, NestJS"
            delay={0.2}
            logo={<DiTerminalBadge />}
          />
          <SkillCard
            refProp={sectionRef}
            controls={controls}
            title="Databases"
            description="PostgreSQL, Oracle, MongoDB"
            delay={0.3}
            logo={<CiDatabase />}
          />
          <SkillCard
            refProp={sectionRef}
            controls={controls}
            title="DevOps"
            description="Docker, CI/CD"
            delay={0.4}
            logo={<DiGitBranch />}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
