function Presentation() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-10 z-10">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Profession */}
        <p className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-purple-500/10 text-purple-500">
          Software Developer
        </p>
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Nicolás Escobar Villegas
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl  text-gray-400 opacity-90 mb-6 max-w-2xl mx-auto">
          Crafting creative and effective solutions through code to address
          real-world challenges and drive innovation.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-purple-600 border-2 text-sm border-purple-600 text-white py-2 px-8 rounded-full font-bold hover:bg-transparent hover:text-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 text-sm border-white text-white py-2 px-8 rounded-full font-bold  hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
export default Presentation;
