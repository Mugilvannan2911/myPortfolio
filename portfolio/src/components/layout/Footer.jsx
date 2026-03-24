import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = ({ scrollToSection, sections }) => {
    const year = new Date().getFullYear();

    const socialLinks = [
        { icon: <Github size={18} />, href: personalInfo.social.github, label: 'GitHub' },
        { icon: <Linkedin size={18} />, href: personalInfo.social.linkedin, label: 'LinkedIn' },
        { icon: <Mail size={18} />, href: `mailto:${personalInfo.social.email}`, label: 'Email' },
    ];

    return (
        <footer className="relative w-full bg-[var(--footer-bg-color)] border-t border-gray-200 dark:border-gray-800 mt-0">

            {/* Gradient top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600" />

            <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </h2>
                        <p className="text-sm text-[var(--footer-text-color)] leading-relaxed max-w-xs">
                            {personalInfo.role} — passionate about crafting beautiful and functional digital experiences.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 mt-1">
                            {socialLinks.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-[var(--footer-text-color)] hover:border-purple-500 hover:text-purple-500 hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--footer-header)] mb-4">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {sections?.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => scrollToSection?.(section.id)}
                                        className="text-sm text-[var(--footer-text-color)] hover:text-[var(--footer-header)] transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--bg-color)] inline-block" />
                                        {section.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--footer-header)] mb-4">
                            Contact
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm text-[var(--footer-text-color)]">
                            <li>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 break-all"
                                >
                                    {personalInfo.email}
                                </a>
                            </li>
                            <li className="leading-snug">{personalInfo.location}</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-6" />

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-500">
                    <p className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start text-[var(--footer-text-color)]">
                        © {year} <span className="font-semibold text-[var(--footer-maintext)]">{personalInfo.name}</span>.
                        All rights reserved.
                    </p>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-semibold text-[var(--footer-text-color)] hover:text-[var(--footer-text-color)] dark:hover:text-purple-300 transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                        <span>Back to top</span>
                        <span className="w-7 h-7 rounded-full border border-[var(--card-border-color)] flex items-center justify-center group-hover:bg-[var(--bg-color)] group-hover:border-[var(--card-border-color)] group-hover:text-[var(--text-color)] transition-all duration-300">
                            <ArrowUp size={16} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
