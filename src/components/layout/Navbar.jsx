import React, { useState, useEffect } from "react";
import Navbuttons from "../ui/Navbuttons";
import { Menu, X, Sun, Moon } from "lucide-react";
const Navbar = ({ sections, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Sync with localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.body.setAttribute("data-theme", saved);
  }, []);


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
          <button
            onClick={() => {
              const nextTheme = theme === "light" ? "dark" : "light";
              setTheme(nextTheme);
              document.body.setAttribute("data-theme", nextTheme);
              localStorage.setItem("theme", nextTheme);
            }}
            className="p-2 bg-white/80 dark:bg-slate-800/80 shadow-lg rounded-xl backdrop-blur-sm transition-all active:scale-95 text-slate-800 dark:text-white"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Header Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        {/* Menu Button (Top Left) */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-white/80 dark:bg-slate-800/80 shadow-lg rounded-xl backdrop-blur-sm transition-all active:scale-95 text-slate-800 dark:text-white"
        >
          <Menu size={20} />
        </button>

        {/* Brand / Logo (Optional center) */}
        <span className="text-lg font-bold tracking-tighter text-[var(--text-color)]">PORTFOLIO</span>

        {/* Theme Toggle (Top Right) */}
        <button
          onClick={() => {
            const nextTheme = theme === "light" ? "dark" : "light";
            setTheme(nextTheme);
            document.body.setAttribute("data-theme", nextTheme);
            localStorage.setItem("theme", nextTheme);
          }}
          className="p-2 bg-white/80 dark:bg-slate-800/80 shadow-lg rounded-xl backdrop-blur-sm transition-all active:scale-95 text-slate-800 dark:text-white"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Side Navigation (only on mobile) */}
      <div
        className={`sidenav md:hidden fixed top-0 left-0 h-full w-72 bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl z-[60] transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-300 ease-out`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold tracking-tight text-[var(--text-color)]">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={24} className="text-[var(--text-color)]" />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-2">
          {sections.map((section) => (
            <div key={section.id} className="w-full">
              <Navbuttons
                label={section.title}
                sectionId={section.id}
                scrollToSection={(id) => {
                  scrollToSection(id);
                  setIsOpen(false);
                }}
              />
            </div>
          ))}
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
