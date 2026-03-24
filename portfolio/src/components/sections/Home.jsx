import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import profileImage from '../../assets/images/mugilvannan.png';

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-28 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-28 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SECTION - Profile Image */}
          <div
            className="flex justify-center items-center order-2 lg:order-1 w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative group flex flex-col items-center">

              {/* Image wrapper — no rotation */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">

                {/* Rotating outer ring (absolutely positioned, pure CSS) */}
                <div className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    background: 'conic-gradient(from 0deg, #9333ea, #ec4899, #3b82f6, #9333ea)',
                    padding: '3px',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-950"></div>
                </div>

                {/* Static circular image on top */}
                <div className="relative w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-full overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-purple-400/30 transition-all duration-500 z-10">
                  <img
                    src={profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Available badge */}
              <div className="mt-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full shadow-lg">
                  <span className="font-semibold text-sm text-white flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - Information */}
          <div
            className="text-center lg:text-left order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Greeting */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  I'm, {personalInfo.name}
                </span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 mx-auto lg:mx-0"></div>
            </div>

            {/* Role */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-4">
                {personalInfo.role}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-color)] leading-relaxed max-w-xl mx-auto lg:mx-0">
                {personalInfo.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#contact"
                className="group relative px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Contact Me
                  <Mail className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="group relative p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-gray-600 dark:text-gray-400">Scroll Down</span>
            <ArrowDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
