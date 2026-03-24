import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../../data/portfolioData';

const iconMap = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
};

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SIZE = 88;
const CENTER = SIZE / 2;

const SkillBox = ({ skill, gradientColors, gradientId, delay, isDark }) => {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const darkBg = '#1f2937';   // gray-800
  const lightBg = '#ffffff';
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setProgress(skill.level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, delay]);

  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;
  const iconSrc = iconMap[skill.name];
  const [c1, c2] = gradientColors;

  return (
    <div
      ref={ref}
      data-aos="zoom-in"
      data-aos-delay={delay}
      data-aos-duration="500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center justify-between gap-3 p-4 rounded-2xl cursor-default transition-all duration-400"
      style={{
        border: hovered
          ? `2px solid ${c1}`
          : isDark ? '2px solid rgba(255,255,255,0.08)' : '2px solid rgba(148,163,184,0.25)',
        background: hovered
          ? `linear-gradient(135deg, ${c1}20, ${c2}14)`
          : isDark ? darkBg : lightBg,
        boxShadow: hovered
          ? `0 8px 30px ${c1}50, 0 0 0 1px ${c1}40`
          : isDark ? '0 2px 12px rgba(0,0,0,0.3)' : '0 2px 12px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Circular progress ring */}
      <div className="relative flex items-center justify-center">
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-lg transition-opacity duration-400"
          style={{
            background: `radial-gradient(circle, ${c1}50, transparent 70%)`,
            opacity: hovered ? 0.6 : 0,
          }}
        />

        <svg className="-rotate-90 relative z-10" width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={c1} />
              <stop offset="100%" stopColor={c2} />
            </linearGradient>
          </defs>

          {/* Track */}
          <circle
            cx={CENTER} cy={CENTER} r={RADIUS}
            fill="none" strokeWidth="5"
            stroke={isDark ? '#374151' : '#e5e7eb'}
          />
          {/* Animated arc */}
          <circle
            cx={CENTER} cy={CENTER} r={RADIUS}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>

        {/* Icon in center */}
        <div className="absolute z-20 flex items-center justify-center">
          {iconSrc ? (
            <img
              src={iconSrc}
              alt={skill.name}
              className="w-8 h-8 object-contain transition-transform duration-300"
              style={{
                transform: hovered ? 'scale(1.15)' : 'scale(1)',
                filter: isDark && skill.name === 'GitHub' ? 'invert(1)' : 'none',
              }}
            />
          ) : (
            <span className="text-lg font-bold" style={{ color: c1 }}>
              {skill.name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Skill name */}
      <p
        className="text-xs font-bold text-center leading-tight transition-colors duration-300 max-w-[80px]"
        style={{ color: hovered ? c1 : isDark ? '#d1d5db' : '#374151' }}
      >
        {skill.name}
      </p>

      {/* % label */}
      <p
        className="text-xs font-semibold transition-all duration-300"
        style={{
          color: c1,
          opacity: hovered ? 1 : 0.5,
        }}
      >
        {progress}%
      </p>
    </div>
  );
};

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    color: 'from-blue-500 to-cyan-400',
    gradientColors: ['#3b82f6', '#22d3ee'],
    gradientId: 'blue',
    skills: skills.frontend,
  },
  {
    title: 'Tools & Others',
    emoji: '🛠️',
    color: 'from-orange-500 to-rose-500',
    gradientColors: ['#f97316', '#f43f5e'],
    gradientId: 'orange',
    skills: skills.tools,
  },
];

const Skills = () => {
  const [isDark, setIsDark] = useState(() => {
    // Read from localStorage first (source of truth), fall back to data-theme attribute
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return document.body.getAttribute('data-theme') === 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.getAttribute('data-theme') === 'dark');
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="800">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-lg sm:text-xl text-[var(--text-color)] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Sections */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              data-aos="fade-up"
              data-aos-delay={catIdx * 150}
              data-aos-duration="800"
              className="relative rounded-2xl p-6 sm:p-10 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              style={{
                backgroundColor: 'var(--card-bg-color)',
                border: isDark ? '1px solid rgba(75, 85, 99, 0.6)' : '1px solid #e5e7eb',
              }}
            >
              {/* Decorative blob */}
              <div className={`absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br ${category.color} rounded-full opacity-10 blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity duration-700`} />

              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-xl font-bold" style={{ color: isDark ? '#ffffff' : '#1f2937' }}>{category.title}</h3>
                <span className={`ml-auto text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white shadow`}>
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Grid — each skill in its own box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBox
                    key={skillIdx}
                    skill={skill}
                    gradientColors={category.gradientColors}
                    gradientId={`${category.gradientId}-${skillIdx}`}
                    delay={catIdx * 80 + skillIdx * 80}
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 animate-pulse pointer-events-none rounded-2xl" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 relative z-10">
              Always Learning, Always Growing 🚀
            </h3>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto relative z-10">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks,
              tools, and best practices to stay at the forefront of web development.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
