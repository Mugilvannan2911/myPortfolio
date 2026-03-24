import React, { useState, useEffect } from "react";
import Navbuttons from "../ui/Navbuttons";
import { Menu, X } from "lucide-react";
import ToggleSwitch from "../ThemeSwitcher";

const Navbar = ({ sections, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Sync with localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.body.setAttribute("data-theme", saved);
  }, []);

  const handleToggle = (event) => {
    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex justify-center">
        <nav
          className="hidden md:flex fixed top-2 left-1/2 -translate-x-1/2 
            w-11/12 bg-slate-50 bg-opacity-70 justify-center gap-6 
            py-4 z-50 shadow-lg rounded-full"
        >
          {sections.map((section) => (
            <Navbuttons
              key={section.id}
              label={section.title}
              sectionId={section.id}
              scrollToSection={scrollToSection}
            />
          ))}
          <ToggleSwitch checked={theme === "dark"} onChange={handleToggle} />
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-white shadow rounded-md"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Side Navigation (only on mobile) */}
      <div
        className={`sidenav md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Portfolio</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {sections.map((section) => (
            <Navbuttons
              key={section.id}
              label={section.title}
              sectionId={section.id}
              scrollToSection={(id) => {
                scrollToSection(id);
                setIsOpen(false);
              }}
            />
          ))}
          <ToggleSwitch checked={theme === "dark"} onChange={handleToggle} />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
