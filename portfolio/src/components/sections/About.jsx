import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized for speed and efficiency',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Love what I do, do what I love',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image/Visual */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform -rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-3xl p-8 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4">{personalInfo.about.yearsExperience}</div>
                  <div className="text-xl sm:text-2xl font-semibold">Years Experience</div>
                  <div className="text-sm sm:text-base opacity-90 mt-2">Building Digital Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div
            className="space-y-6 text-[var(--text-color)]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              {personalInfo.about.intro}
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              {personalInfo.about.description}
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              {personalInfo.about.passion}
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 pt-6">
              <div
                className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay="0"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {personalInfo.about.projectsCompleted}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Projects
                </div>
              </div>
              <div
                className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {personalInfo.about.happyClients}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Clients
                </div>
              </div>
              <div
                className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Satisfaction
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Highlights Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-color)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
