import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/layout/Navbar";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const sections = [
  { id: "home", title: "Home", element: <Home /> },
  { id: "about", title: "About", element: <About /> },
  { id: "skills", title: "Skills", element: <Skills /> },
  { id: "projects", title: "Projects", element: <Projects /> },
  { id: "experience", title: "Experience", element: <Experience /> },
  { id: "contact", title: "Contact", element: <Contact /> },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Mainpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom',
    });

    // Refresh AOS on scroll for better performance
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Navbar sections={sections} scrollToSection={scrollToSection} />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="w-full"
        >
          {section.element}
        </section>
      ))}
      <Footer sections={sections} scrollToSection={scrollToSection} />
    </div>
  );
};

export default Mainpage;
