import project1Img from "../../assets/img/project-1.png";
import project2Img from "../../assets/img/project-2.png";
import project3Img from "../../assets/img/project-3.png";
import project4Img from "../../assets/img/project-4.png";
import project5Img from "../../assets/img/project-5.png";
import project6Img from "../../assets/img/project-6.png";
import project7Img from "../../assets/img/project-7.png";

const projects = [
  {
    id: 1,
    name: "Store with JavaScript",
    image: project1Img,
    technologies: ["JavaScript", "html"],
    url: "https://nicolasaev.github.io/java-script-store/",
  },
  {
    id: 2,
    name: "Landing Page with React and Tailwind CSS",
    image: project4Img,
    technologies: ["React", "Tailwind CSS", "Nest.js"],
    url: "https://www.escobarconstrucciones.cl/",
  },
  {
    id: 3,
    name: "Hexagonal Architecture",
    image: project5Img,
    technologies: ["Node Js", "MongoDB"],
    url: "https://github.com/NicolasAEV/hexagonal-architecture-cost-center",
  },
  {
    id: 4,
    name: "Explain event loop project",
    image: project6Img,
    technologies: ["Nodejs"],
    url: "https://github.com/NicolasAEV/event-loop-chat",
  },
  {
    id: 5,
    name: "Explain SOLID project",
    image: project7Img,
    technologies: ["Nest.Js", "MongoDB"],
    url: "https://github.com/NicolasAEV/solid-project",
  },
  {
    id: 6,
    name: "Assitent IA Fitness with nest.js",
    image: project2Img,
    technologies: ["Angular", "Nest.Js", "PostgreSQL"],
    url: "https://example.com/project3",
  },
  {
    id: 7,
    name: "Microservices JobSearch Page",
    image: project3Img,
    technologies: ["Angular", "Nest.Js", "PostgreSQL", "Docker", "Spring boot"],
    url: "https://example.com/project2",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div className="border rounded-lg border-gray-800 shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-52 object-cover cursor-pointer rounded-t-lg bg-white"
          loading="lazy"
        />
      </a>
      <div className="p-6">
        <h2 className="text-2xl text-white mb-4">{project.name}</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={`${project.id}-${index}`}
              className="text-sm text-gray-300 bg-gray-800 py-1 px-3 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-base font-semibold text-left mb-8">My projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
