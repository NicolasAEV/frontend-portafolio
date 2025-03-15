import { FaGithub, FaLinkedin } from "react-icons/fa"; 
const ContactInfo = () => {
  return (
    <div>
      {/* Follow Me */}
      <div className="text-white">
        <h3 className="text-base font-semibold text-gray-200 border-b-4 border-purple-400 pb-4 mb-6">
          Follow Me
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nicolas-alejandro-escobar-villegas/"
            target="_blank"
            className="flex gap-3 items-center text-blue-800 bg-transparent py-3 px-6 rounded-lg shadow-md border-2 border-blue-800 hover:text-white hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
          >
            <FaLinkedin className="text-2xl" />
            <span className="text-base font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NicolasAEV"
            className="flex gap-3 items-center text-gray-200 bg-transparent py-3 px-6 rounded-lg shadow-md border-2 border-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="text-2xl" />
            <span className="text-base font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
