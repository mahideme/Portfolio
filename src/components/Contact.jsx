import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'a93c29c8-b593-4ca6-95ab-b72da2c39b9c'); // Replace this with your key

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Message sent successfully!');
      
      event.target.reset();
      
    } else {
      setResult(data.message || 'Something went wrong.');
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 md:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="flex flex-col items-center justify-center space-y-6 text-3xl">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                My Official Accounts
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-md">Connect with me:</p>
            </div>
            <div className="flex space-x-8">
              <a
                href="https://www.linkedin.com/in/mahlet-demeke-31326b34b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mahideme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:mahletdawit03@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

         
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here"
              required
              className="p-3 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>

            {result && (
  <div
    className={`p-4 mt-2 rounded-lg font-medium text-center transition-all duration-300
      ${result.toLowerCase().includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
    `}
  >
    {result}
  </div>
)}

          </form>
        </div>
      </div>
    </section>
  );
}
