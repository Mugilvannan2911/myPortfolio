import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects as projectsData } from '../../data/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // const filters = ['All', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-[var(--text-color)] max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105'
                }`}
            >
              {filter}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                    aria-label="View Live"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-800" />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[var(--text-color)] mb-6">
            Want to see more of my work?
          </p>
          <a
            href={projectsData[0]?.githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
