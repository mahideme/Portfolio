import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAward, FaNetworkWired, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const certificates = [
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco Networking Academy',
    institution: 'Adama Science and Technology University',
    date: 'September 2025',
    courses: [
      { name: 'Routing and Switching 1: Introduction to Networks', hours: 70 },
      { name: 'Routing and Switching 2: Switching, Routing and Wireless Essentials', hours: 70 },
      { name: 'Routing and Switching 3: Enterprise Networking, Security and Automation', hours: 70 },
    ],
    totalHours: 210,
    icon: <FaNetworkWired />,
    color: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  },
];

const Certificates = () => {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8"
      id="certificates"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4"
          data-aos="fade-up"
        >
          Certificates
        </h2>
        <p
          className="text-center text-gray-500 dark:text-gray-400 mb-14 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Credentials that validate my expertise
        </p>

        <div className="grid grid-cols-1 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Top color bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${cert.color}`} />

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left: icon + info */}
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white text-2xl shadow-md`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {cert.institution}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${cert.badgeColor}`}>
                          {cert.date}
                        </span>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                          {cert.totalHours} Hours Total
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: view button */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setModal(cert)}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <FaAward />
                      View Certificate
                    </button>
                  </div>
                </div>

                {/* Courses */}
                <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                    Courses Completed
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cert.courses.map((course, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-100 dark:border-gray-600 flex items-start gap-2"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-snug">
                            {course.name}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            {course.hours} hrs
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className={`bg-gradient-to-r ${modal.color} p-6 flex justify-between items-start`}>
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">Certificate of Completion</p>
                <h3 className="text-white text-xl font-bold">{modal.title}</h3>
              </div>
              <button
                onClick={() => setModal(null)}
                className="text-white/80 hover:text-white transition text-xl mt-1"
              >
                <FaTimes />
              </button>
            </div>

            {/* Certificate preview */}
            <div className="p-6">
              <div className="border-4 border-double border-blue-200 dark:border-blue-800 rounded-xl p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">
                    <FaAward />
                  </div>
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                  Federal Democratic Republic of Ethiopia · Ministry of Education
                </p>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-4">
                  {modal.institution} · Cisco Networking Academy
                </p>
                <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-1 uppercase tracking-wide">
                  Certificate of Completion
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">This is to certify that</p>
                <p className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4">
                  Mahlet Demeke Dawit
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  Has successfully completed the CCNA Routing and Switching Training Program (CCNAv7)
                  comprising <strong>210 hours</strong> across 3 courses.
                </p>
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                  {modal.courses.map((c, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full"
                    >
                      RS{i + 1} · {c.hours}hrs
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Issued: {modal.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
