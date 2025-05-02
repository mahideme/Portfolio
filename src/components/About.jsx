import React, { useEffect } from 'react';
import { FaNetworkWired, FaLaptopCode, FaHtml5, FaCss3Alt, FaJs, FaCloud } from 'react-icons/fa'; 


import AOS from 'aos'; 
import 'aos/dist/aos.css'; 


const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4 md:px-8" id="about">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
          data-aos="fade-up"
        >
          About Me
        </h2>

       
        <p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I'm a fourth-year Computer Science and Engineering student at ASTU, passionate about solving problems through technology and logical thinking. I have a strong foundation in programming languages like Python and continuously work to sharpen my technical skills.
          <br/><br/>
          Alongside programming, I am building expertise in networking through the Cisco Networking Academy and completed a networking-focused internship at CBE. Recently, I have begun exploring cloud computing to expand my knowledge further.
        </p>

        <p 
          className="text-md text-gray-600 dark:text-gray-400 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          In addition to technical skills, I have developed strong soft skills through the ALX program, including team collaboration, communication, and problem-solving. I am committed to continuous learning and excited to contribute to innovative, real-world projects.
        </p>

       
        <div className="mt-12">
          <h3 
            className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
            data-aos="fade-up"
          >
            My Skills
          </h3>
          
          <div className="flex justify-center gap-10 flex-wrap">
        
            <div className="skill-icon p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" data-aos="fade-up">
              <FaNetworkWired className="text-4xl text-indigo-600" />
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Networking</p>
            </div>

            <div className="skill-icon p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" data-aos="fade-up" data-aos-delay="500">
             <FaLaptopCode className="text-4xl text-green-600" />
             <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Packet Tracer</p>
            </div>

            <div className="skill-icon p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" data-aos="fade-up" data-aos-delay="100">
              <FaHtml5 className="text-4xl text-orange-600" />
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">HTML</p>
            </div>

            <div className="skill-icon p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" data-aos="fade-up" data-aos-delay="200">
              <FaCss3Alt className="text-4xl text-blue-600" />
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">CSS</p>
            </div>

            <div className="skill-icon p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" data-aos="fade-up" data-aos-delay="300">
              <FaJs className="text-4xl text-yellow-500" />
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">JavaScript</p>
            </div>

            <div className="skill-icon p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110" data-aos="fade-up" data-aos-delay="400">
              <FaCloud className="text-4xl text-blue-500" />
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
