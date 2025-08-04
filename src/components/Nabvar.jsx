// src/components/shared/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { Link } from "react-scroll"; // npm install react-scroll
import { openAndDownloadResume } from "../utils/downloadResume";

const navItems = [
  //   { label: "Home", to: "home" },
  { label: "About Me", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "GitHub", to: "github" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-2xl font-bold font-pacifico text-indigo-600"
        >
          {"{"} Pooja Jaiswal {"}"}
        </Link>

        {/* <h1 className="text-2xl font-bold font-pacifico text-indigo-600">
          {"{"} Pooja Jaiswal {"}"}
        </h1> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={openAndDownloadResume}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Resume
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-600"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer hover:text-indigo-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  openAndDownloadResume();
                  setIsOpen(false);
                }}
                className="text-cyan-600 hover:underline cursor-pointer"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
