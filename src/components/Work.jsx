import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import project1 from '../assets/project1.jpg';
import project4 from '../assets/project4.jpg';
import project3 from '../assets/project3.jpg';
import project2 from '../assets/project2.jpg';

const projects = [
  {
    title: 'Enterprise Network Project',
    description:
      'This project involves designing a reliable and secure enterprise network for CBETECH plc, a tech support company based in Ethiopia. The goal is to interconnect the head office in Addis Ababa with upcoming branch offices in Adama, Hawassa, and Mekelle, ensuring smooth communication and IT service delivery across all locations.',
    image: project1,
  },
  {
    title: 'Campus Network Project',
    description:
      'I designed this campus network project to demonstrate redundancy and high availability using core networking components. The setup includes two Layer 3 switches, two routers, and dual ISP connections to ensure failover and load balancing. The network also incorporates multi-switch architecture for improved scalability and resilience, simulating a real-world enterprise campus environment.',
    image: project2,
  },
  {
    title: 'Cloud Computing Project',
    description:
      'A project showcasing cloud deployment, virtualization, and service models like IaaS, PaaS, and SaaS.',
    image: project3,
    comingSoon: true,
  },
  {
    title: 'To-Do List Website',
    description:
      'I created this simple To-Do List web app using basic HTML, CSS, and JavaScript to practice and understand core frontend development concepts. It allows users to add, mark, and delete tasks. This project helped me explore DOM manipulation, event handling, and custom styling.',
    image: project4,
  },
];

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
          {projects.map((project, index) => (
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
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-semibold">
                  Project Preview
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
