import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Services",
    "Projects",
    "Contact",
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full px-6 py-4 shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto  flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-[#6A5AE0] cursor-pointer"
          onClick={() => handleScroll("Home")}
        >
          Portfolio
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-[#6A5AE0] transition ${
                item === "Home" ? "text-[#6A5AE0] font-semibold" : ""
              }`}
              onClick={() => handleScroll(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white mt-4 py-4 shadow-lg rounded-md gap-4">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item)}
              className="text-gray-800 hover:text-[#6A5AE0] font-medium cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
