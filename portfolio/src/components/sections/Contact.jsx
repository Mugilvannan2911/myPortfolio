import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle, XCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const EMAILJS_SERVICE_ID = 'service_0lkpbjc';
const EMAILJS_TEMPLATE_ID = 'template_ehnycod';
const EMAILJS_PUBLIC_KEY = 'yQYKq5n8lBQ3TGozz';
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = 'template_q7z3np8';

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    // Map EmailJS field names to state keys
    const fieldMap = {
      from_name: 'name',
      from_email: 'email',
      subject: 'subject',
      message: 'message'
    };
    const stateKey = fieldMap[e.target.name] || e.target.name;
    setFormData({
      ...formData,
      [stateKey]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // 1. Send the primary message to YOU
      const res1 = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log("Primary Email Sent Status:", res1.status, res1.text);

      // 2. Send the auto-reply to the VISITOR'S EMAIL
      const res2 = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log("Auto-Reply Email Sent Status:", res2.status, res2.text);

      setStatus({
        type: 'success',
        message: "Message sent successfully! You'll receive a confirmation email shortly."
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: 'error',
        message: "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };
  
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: personalInfo.social.github, label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-white' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Gmail', color: 'hover:text-red-400' }
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
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-[var(--text-color)]">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group relative p-6 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--text-color)]">
                {info.title}
              </h3>
              <p className="text-sm text-[var(--text-color)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {info.value}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Form and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div
            className="lg:col-span-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--text-color)]">
                Send Me a Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--card-bg-color)] border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--card-bg-color)] border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--card-bg-color)] border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-color)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-[var(--card-bg-color)] text-[var(--text-color)] placeholder:text-gray-400 border border-gray-300 
                                rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Notification */}
                {status.message && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl mt-4 transition-all duration-300 animate-fade-in ${status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-700'
                      }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Social Links & Additional Info */}
          <div
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Social Links */}
            <div className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[var(--text-color)]">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 text-[var(--text-color)] bg-[var(--subcard-bg-color)] rounded-xl hover:scale-105 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-2xl mt-21 shadow-xl p-6 sm:p-8 text-text-color"
              style={{ background: "var(--availability-gradient)" }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Available for Work
              </h3>
              <p className="text-sm sm:text-base opacity-90 mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[var(--text-color)]">
            I typically respond within 24 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
