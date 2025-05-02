import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + window.innerHeight / 2; 

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     
      <nav className={`p-4 flex justify-between items-center transition-all duration-300 fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-md shadow-xl' : 'bg-slate-800'}`}>
       
        <div className="flex items-center justify-center gap-2">

  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-3xl shadow-2xl hover:shadow-blue-400/50 hover:scale-110 transition-all duration-500 ease-in-out">
    MD
  </div>
</div>



    
        <div className="hidden md:flex space-x-8 gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-all duration-300 transform hover:scale-98 
                ${activeSection === item.id ? 'text-blue-400 font-semibold underline underline-offset-4' : 'text-gray-200 hover:text-blue-400'}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

      
        <div className="md:hidden text-gray-200">
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

  
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-slate-800 z-40 md:hidden transition-transform transform animate-slideDown">
          <div className="flex flex-col p-6 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-all duration-300 transform hover:scale-105 
                ${activeSection === item.id ? 'text-blue-400 font-semibold underline underline-offset-4' : 'text-gray-200 hover:text-blue-400'}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

    
      <div className="fixed right-4 bottom-4 z-30 md:right-8 md:bottom-8 animate-bounce-slow">
        <a href="#contact">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center gap-2 hover:scale-105 transform">
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
};

export default Navbar;
