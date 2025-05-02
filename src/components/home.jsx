import React, { useEffect } from 'react';
import ProfileImage from '../assets/Profile.png';
import { FaHtml5, FaCss3Alt, FaJs, FaNetworkWired, FaCloud, FaReact } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-slate-900 overflow-hidden" id="home">
      

      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon icon={<FaHtml5 />} top="10%" left="15%" delay="0s" />
        <FloatingIcon icon={<FaCss3Alt />} top="20%" right="10%" delay="2s" />
        <FloatingIcon icon={<FaJs />} bottom="15%" left="20%" delay="1s" />
        <FloatingIcon icon={<FaNetworkWired />} bottom="10%" right="20%" delay="2s" />
        <FloatingIcon icon={<FaCloud />} top="50%" left="50%" delay="1s" center />
        <FloatingIcon icon={<FaReact />} top="10%" left="30%" delay="4s" />
      </div>


      <div className="flex-1 mb-8 md:mb-0 z-10 text-center md:text-left" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi 🙋‍♀️, I'm Mahlet Demeke
          
        </h1>
        <p className="text-lg text-gray-400 mb-6">
        Network Engineer passionate about building and securing modern networks. Skilled in networking, programming, and cloud fundamentals. Welcome to my portfolio!
        </p>
        <a href="#work">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            View Projects
          </button>
        </a>
      </div>

   
      <div className="flex-1 flex justify-center z-10" data-aos="fade-left">
        <img 
          src={ProfileImage} 
          alt="Profile" 
          className="w-72 h-72 object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

    </section>
  );
};


const FloatingIcon = ({ icon, top, bottom, left, right, delay, center }) => {
  const style = {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    animationDelay: delay,
    transform: center ? 'translate(-50%, -50%)' : undefined
  };
  
  return (
    <div 
      className="absolute text-5xl opacity-10 text-blue-300 animate-slowFloat"
      style={style}
    >
      {icon}
    </div>
  );
};

export default Home;
