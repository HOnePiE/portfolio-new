import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileArrowDown} from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div id='Resume' className="min-h-screen flex flex-col items-center justify-center p-6 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl max-w-4xl w-full p-8">
        {/* Resume Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">My Resume</h1>
          <p className="text-lg text-gray-300">A brief overview of my professional experience and skills.</p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
            <li>JavaScript / React / Node.js</li>
            <li>HTML / CSS / Tailwind CSS</li>
            <li>API Development</li>
            <li>Database Management</li>
            <li>UI/UX Design Principles</li>
            <li>Problem Solving & Debugging</li>
          </ul>
        </div>

        {/* Experience Section */}
        {/* <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="text-gray-200">
            <div className="mb-4">
              <h3 className="font-bold">Frontend Developer - XYZ Company</h3>
              <p className="text-sm text-gray-400">Jan 2021 - Present</p>
              <p>Developing and maintaining web applications using React and Tailwind CSS. Collaborating with design and backend teams to create seamless user experiences.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Web Developer Intern - ABC Corp</h3>
              <p className="text-sm text-gray-400">Jul 2020 - Dec 2020</p>
              <p>Assisted in building responsive websites, learning about best practices in coding and UI/UX design, and improving existing features for client projects.</p>
            </div>
          </div>
        </div> */}

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="text-gray-200">
            <div className="mb-4">
              <h3 className="font-bold">Bachelor's in Computer Science</h3>
              <p className="text-sm text-gray-400">College of BTEC FPT - Graduated 2024</p>
              <p>Focused on software development, web technologies, and data structures.</p>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-6">
          <a
            href="/src/assets/pdf/CV.pdf"
            download="CV.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>Download PDF CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
