import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <a
      href={href}
      className="text-xs md:text-sm hover:text-purple-400 transition duration-300"
      onClick={onClick}
    >
      {label}
    </a>
  );

  return (
    <nav className="sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <span className="text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 hover:text-transparent transition duration-300">
            &lt;NicoDev/&gt;
          </span>

          {/* Menu icon for mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop menu links */}
          <div
            className={`flex-1 items-center justify-end space-x-6 text-white font-medium hidden lg:flex transition-all duration-300`}
          >
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden block text-white bg-gray-900/50 p-4 fixed top-16 left-0 right-0 shadow-md z-50 backdrop-blur-sm isolation-isolate transition-all duration-300">     
          <div className="grid grid-cols-1 space-y-4 ">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} onClick={toggleMenu} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;