import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close menu on mobile after click
  };

  return (
    <nav className="  fixed top-0 left-0 w-full z-50 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-b border-white/20 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-serif">Taniya Agarwal</h1>

        {/* Desktop Nav Links */}
        <ul className="font-serif hidden md:flex space-x-8 text-lg font-medium">
          {["about", "skills", "projects", "resume", "contact"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className="hover:text-orange-400 transition-colors duration-300 transform hover:scale-110 capitalize"
                >
                  {section}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-t border-white/20 py-4 space-y-4">
          {["about", "skills", "projects", "resume", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-lg hover:text-orange-400 transition duration-300 transform hover:scale-110 capitalize"
              >
                {section}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
