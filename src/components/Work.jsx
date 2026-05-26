import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import project1 from '../assets/project1.jpg';
import project3 from '../assets/project3.jpg';
import project2 from '../assets/project2.jpg';
import vsHome from '../assets/venturescope-home.png';
import vsDashboard from '../assets/venturescope-dashboard.png';

const projects = [
  {
    title: 'Enterprise Network Project',
    description:
      'This project involves designing a reliable and secure enterprise network for CBETECH plc, a tech support company based in Ethiopia. The goal is to interconnect the head office in Addis Ababa with upcoming branch offices in Adama, Hawassa, and Mekelle, ensuring smooth communication and IT service delivery across all locations.',
    image: project1,
    link: 'https://github.com/mahideme/enterprise-network-project',
  },
  {
    title: 'Campus Network Project',
    description:
      'I designed this campus network project to demonstrate redundancy and high availability using core networking components. The setup includes two Layer 3 switches, two routers, and dual ISP connections to ensure failover and load balancing. The network also incorporates multi-switch architecture for improved scalability and resilience, simulating a real-world enterprise campus environment.',
    image: project2,
    link: 'https://github.com/mahideme/Campus-project',
  },
  {
    title: 'Cloud Computing Project',
    description:
      'A project showcasing cloud deployment, virtualization, and service models like IaaS, PaaS, and SaaS.',
    image: project3,
    comingSoon: true,
  },
  {
    title: 'VentureScope — Career Intelligence Platform',
    description:
      "A data-driven career guidance platform built to help Ethiopian tech professionals navigate the job market. I led the frontend development and built the Chrome extension. VentureScope analyzes real-time market needs, maps skills to industry demand, and provides hiring signals across Ethiopia's growing tech economy.",
    tags: ['React', 'Next.js', 'Chrome Extension', 'Frontend'],
    liveLink: 'https://www.venturescope.tech/',
    githubLink: 'https://github.com/VentureScope',
    homeImage: vsHome,
    dashboardImage: vsDashboard,
    isVentureScope: true,
  },
];

const VentureScopeCard = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all hover:scale-105 flex flex-col"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      {/* Image preview with tab switcher */}
      <div className="mb-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
              activeTab === 'home'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Homepage
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Dashboard
          </button>
        </div>

        {/* Image */}
        <div className="w-full h-56 rounded-lg overflow-hidden shadow-xl relative">
          <img
            src={activeTab === 'home' ? project.homeImage : project.dashboardImage}
            alt={activeTab === 'home' ? 'VentureScope Homepage' : 'VentureScope Dashboard'}
            className="w-full h-full object-cover object-top transition-all duration-500"
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Site
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
};

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 px-4 md:px-8"
      id="work"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16"
          data-aos="fade-up"
        >
          My Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {projects.map((project, index) =>
            project.isVentureScope ? (
              <VentureScopeCard key={index} project={project} index={index} />
            ) : (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {project.comingSoon ? (
                  <div className="inline-block bg-gray-500 text-white px-4 py-2 rounded font-semibold opacity-70 cursor-not-allowed">
                    Coming Soon
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
