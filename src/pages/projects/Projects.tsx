import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import project1Img from "../../assets/img/project-1.png";
import project3Img from "../../assets/img/project-3.png";
import project4Img from "../../assets/img/project-4.png";
import project5Img from "../../assets/img/project-5.png";
import project6Img from "../../assets/img/project-6.png";
import project7Img from "../../assets/img/project-7.png";
import projectCleanArchImg from "../../assets/img/project-clean-arch.png";
import projectFitnessImg from "../../assets/img/project-fitness.png";
import projectLicitacionesImg from "../../assets/img/project-licitaciones.png";
import projectMeetingmindImg from "../../assets/img/project-meetingmind.png";

const projects = [
  // ── Destacados ───────────────────────────────────────────────
  {
    id: 10,
    name: "MeetingMind — AI Meeting Transcription",
    image: projectMeetingmindImg,
    technologies: ["Electron", "TypeScript", "AI Local", "Whisper"],
    url: "https://github.com/NicolasAEV/meetingmind",
    featured: true,
  },
  {
    id: 9,
    name: "Licitaciones Tracker",
    image: projectLicitacionesImg,
    technologies: ["Next.js", "TypeScript", "Docker", "Mercado Público API"],
    url: "https://github.com/NicolasAEV/licitaciones-tracker",
    featured: true,
  },
  {
    id: 8,
    name: "Auth — Clean Architecture",
    image: projectCleanArchImg,
    technologies: ["NestJS", "TypeScript", "JWT", "Clean Architecture", "SOLID"],
    url: "https://github.com/NicolasAEV/auth-clean-architecture",
    featured: true,
  },
  {
    id: 11,
    name: "Fitness Platform (PWA + Backend + Admin)",
    image: projectFitnessImg,
    technologies: ["React", "NestJS", "TypeScript", "PWA", "PostgreSQL"],
    url: "https://github.com/NicolasAEV/fitness-plataform-backend",
    featured: true,
  },
  // ── Anteriores ───────────────────────────────────────────────
  {
    id: 7,
    name: "Microservices JobSearch Page",
    image: project3Img,
    technologies: ["Angular", "Nest.Js", "PostgreSQL", "Docker", "Spring Boot", "Gateway"],
    url: "https://github.com/orgs/ArchiJobs/repositories",
    featured: false,
  },
  {
    id: 3,
    name: "Hexagonal Architecture",
    image: project5Img,
    technologies: ["Node.js", "MongoDB"],
    url: "https://github.com/NicolasAEV/hexagonal-architecture-cost-center",
    featured: false,
  },
  {
    id: 5,
    name: "Explain SOLID Project",
    image: project7Img,
    technologies: ["Nest.Js", "MongoDB"],
    url: "https://github.com/NicolasAEV/solid-project",
    featured: false,
  },
  {
    id: 4,
    name: "Event Loop Chat",
    image: project6Img,
    technologies: ["Node.js"],
    url: "https://github.com/NicolasAEV/event-loop-chat",
    featured: false,
  },
  {
    id: 2,
    name: "Landing Page — Escobar Construcciones",
    image: project4Img,
    technologies: ["React", "Tailwind CSS", "Nest.js"],
    url: "https://www.escobarconstrucciones.cl/",
    featured: false,
  },
  {
    id: 1,
    name: "Store with JavaScript",
    image: project1Img,
    technologies: ["JavaScript", "HTML"],
    url: "https://nicolasaev.github.io/java-script-store/",
    featured: false,
  },
];

/* ── Card ─────────────────────────────────────────────────── */
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="px-2">
    <div className="border rounded-xl border-gray-800 shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] bg-gray-900/60 backdrop-blur-sm">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden rounded-t-xl">
          {project.featured && (
            <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-xs font-semibold bg-purple-600 text-white rounded-full">
              Featured
            </span>
          )}
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover cursor-pointer bg-gray-800 hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </a>
      <div className="p-4">
        <h2 className="text-sm font-semibold text-white mb-3 line-clamp-2 leading-snug">
          {project.name}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, index) => (
            <span
              key={`${project.id}-${index}`}
              className="text-xs text-gray-300 bg-gray-800 py-0.5 px-2.5 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── Flecha personalizada ─────────────────────────────────── */
const Arrow = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 bg-gray-900/80 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-200 ${
      direction === "prev" ? "-left-4" : "-right-4"
    }`}
    aria-label={direction === "prev" ? "Previous" : "Next"}
  >
    <svg
      className="w-4 h-4 text-gray-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  </button>
);

/* ── Componente principal ─────────────────────────────────── */
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
    dotsClass: "slick-dots !bottom-[-28px]",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  return (
    <div className="py-4">
      <h1 className="text-base font-semibold text-left mb-6">My projects</h1>

      {/* Contenedor con espacio para flechas y dots */}
      <div className="relative px-5 pb-10">
        <Slider {...settings}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Slider>
      </div>

      {/* Contador */}
      <p className="text-center text-xs text-gray-500 mt-2">
        {projects.length} projects · swipe or use arrows to navigate
      </p>
    </div>
  );
};

export default Projects;
