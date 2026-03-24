import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { experience } from '../../data/portfolioData';

const Experience = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-5xl mx-auto w-full">
                {/* Section Header */}
                <div
                    className="text-center mb-16"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            Experience & Education
                        </span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg sm:text-xl text-[var(--text-color)] max-w-2xl mx-auto">
                        My professional journey and academic background
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600 rounded-full"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {experience.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                                data-aos-delay={index * 100}
                            >
                                {/* Content Card */}
                                <div className="flex-1">
                                    <div className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        {/* Icon and Type */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.type === 'work'
                                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                                : 'bg-gradient-to-r from-purple-500 to-pink-500'
                                                }`}>
                                                {item.type === 'work' ? (
                                                    <Briefcase className="w-6 h-6 text-white" />
                                                ) : (
                                                    <GraduationCap className="w-6 h-6 text-white" />
                                                )}
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.type === 'work'
                                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                                }`}>
                                                {item.type === 'work' ? 'Work Experience' : 'Education'}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-color)] mb-2">
                                            {item.title}
                                        </h3>

                                        {/* Company/School */}
                                        <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                                            {item.company}
                                        </p>

                                        {/* Location and Period */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-[var(--text-color)]">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{item.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{item.period}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[var(--text-color)]">
                                            {item.description}
                                        </p>

                                        {/* Achievements */}
                                        {item.achievements && item.achievements.length > 0 && (
                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold text-[var(--text-color)] mb-2">
                                                    Key Achievements:
                                                </p>
                                                <ul className="space-y-2">
                                                    {item.achievements.map((achievement, achIndex) => (
                                                        <li
                                                            key={achIndex}
                                                            className="flex items-start gap-2 text-sm text-[var(--text-color)]"
                                                        >
                                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:flex items-center justify-center flex-shrink-0">
                                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                                </div>

                                {/* Spacer for alignment */}
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download Resume CTA */}
                <div
                    className="text-center mt-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experience;
