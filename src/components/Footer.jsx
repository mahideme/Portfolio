import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
      
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

      
        <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-white">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
