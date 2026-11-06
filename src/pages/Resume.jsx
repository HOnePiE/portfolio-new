import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const experience = [
  {
    title: "Club Chairman - BITC (BTEC Information Technology Club)",
    period: "2022 - 2023",
    points: [
      "Managed the club's committees and members, and set its direction and goals.",
      "Represented the club at external events and built relationships with other clubs and organizations.",
      "Ran HTML & CSS and JavaScript courses for students, and organized team building activities and workshops.",
    ],
  },
  {
    title: "Web Developer",
    period: "2022",
    points: [
      "Over 200 hours of training with personal website projects.",
      "Analyzed and designed website UI & UX using tools such as Figma and Miro.",
      "Built websites with WordPress.",
    ],
  },
];

const certificates = [
  {
    title: "BTEC Knight",
    detail: "Department of English - Fall 2021",
  },
  {
    title: "Excellent Student",
    detail: "Department of English - Spring 2022",
  },
  {
    title: "Excellent Student",
    detail: "International Information Technology - Spring 2023",
  },
];

const Resume = () => {
  return (
    <section
      id="Resume"
      className="min-h-screen flex flex-col items-center justify-center p-6 text-white"
    >
      <div className="bg-black/40 backdrop-blur-lg rounded-xl shadow-xl max-w-4xl w-full p-6 sm:p-8">
        {/* Resume Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">My Resume</h1>
          <p className="text-lg text-gray-200">
            A brief overview of my professional experience and skills.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-gray-100">
            <li>JavaScript / React / Node.js</li>
            <li>HTML / CSS / Tailwind CSS</li>
            <li>PHP / Laravel</li>
            <li>API Development</li>
            <li>Database Management</li>
            <li>UI/UX Design Principles</li>
            <li>Problem Solving & Debugging</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="text-gray-100 space-y-4">
            {experience.map(({ title, period, points }) => (
              <div key={title}>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-gray-300">{period}</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="text-gray-100">
            <div className="mb-4">
              <h3 className="font-bold">Bachelor's in Computer Science</h3>
              <p className="text-sm text-gray-300">
                College of BTEC FPT - Graduated 2024
              </p>
              <p>
                Focused on software development, web technologies, and data
                structures.
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-100">
            {certificates.map(({ title, detail }) => (
              <li key={detail}>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-gray-300">{detail}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-6">
          <a
            href={`${process.env.PUBLIC_URL}/pdf/CV.pdf`}
            download="Pham-Anh-Tuan-CV.pdf"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>Download PDF CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
