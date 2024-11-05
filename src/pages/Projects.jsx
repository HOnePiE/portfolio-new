import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import avatar1 from "../assets/img/z5942823955669_27fdac2ef769fceb670d933169e2ab64.jpg";
import avatar2 from "../assets/img/z5942823944025_d033d8307a59190028963b01765189df.jpg";
import avatar3 from "../assets/img/z5942823954883_991ba7640970ca99d0dec9a1da5ab3b3.jpg";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    image: avatar1,
    description: "Showcases my projects and skills.",
    tech: [faReact, faNodeJs, faCss3Alt],
  },
  {
    id: 2,
    name: "E-commerce Store",
    image: avatar2,
    description: "An online store with payment functionality.",
    tech: [faReact, faCss3Alt],
  },
  {
    id: 3,
    name: "Social Network",
    image: avatar3,
    description: "A platform to connect with friends.",
    tech: [faReact, faNodeJs],
  },
  // Add more projects as needed
];

const ProjectsCarousel = () => {
  const [projectList, setProjectList] = useState(projects);
  const [hoveredProjectId, setHoveredProjectId] = useState(false);

  console.log(hoveredProjectId);

  const handleNext = () => {
    setProjectList((prevProjects) => [
      ...prevProjects.slice(1),
      prevProjects[0],
    ]);
  };

  const handlePrevious = () => {
    setProjectList((prevProjects) => [
      prevProjects[prevProjects.length - 1],
      ...prevProjects.slice(0, -1),
    ]);
  };

  return (
    <div
      id="Projects"
      className="min-h-screen flex flex-col items-center justify-center  text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="relative w-96 h-80 flex justify-center items-center mb-6">
        {projectList.map((project, index) => (
          <divl
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(false)}
            className={`absolute ml-5 flex flex-col bg-white/20 backdrop-blur-lg rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform ease-in-out`}
            style={{
              transform: `translate(${index * -15}px, ${index * 15}px) ${
                hoveredProjectId === project.id ? "scale(1)" : "scale(0.9)"
              }`,
              width:
                hoveredProjectId === project.id && index === 0
                  ? "20rem"
                  : "14rem",
              height:
                hoveredProjectId === project.id && index === 0
                  ? "24rem"
                  : "18rem",
              zIndex: index === 0 ? 50 : 50 - index,
              transition:
                hoveredProjectId === project.id
                  ? "transform 1s ease-in-out, width 0.7s ease 1s, height 0.7s ease 1s"
                  : "transform 1s ease-in-out, width 0.7s ease, height 0.7s ease",
            }}
          >
            <div className="flex flex-row items-center space-x-2 p-4 transition-all ease-in-out duration-500">
              {/* App Icon and Basic Info */}
              <div
                className={`absolute  z-10 rounded-md transition-all ease-in-out duration-500
                  ${
                    hoveredProjectId === project.id && index === 0
                      ? "w-11 h-11 top-2 delay-1000"
                      : "w-48 h-60 top-5 "
                  }
                `}
              >
                <img
                  src={project.image}
                  alt="App Icon"
                  className={`object-cover object-center rounded-md w-full h-full transition-all ease-in-out duration-500${
                    hoveredProjectId === project.id && index === 0 ? " " : ""
                  }`}
                />
                {/* Gradient overlay */}
                <div
                  className={`absolute rounded-md inset-0 bg-gradient-to-b from-transparent to-black transition-opacity duration-500 ${
                    hoveredProjectId === project.id ? "opacity-0" : "opacity-70"
                  }`}
                ></div>
              </div>

              <p
                className={`text-white text-lg font-semibold transition-all  ease-in-out duration-500 ${
                  hoveredProjectId === project.id && index === 0
                    ? "opacity-100 pl-12 delay-1000"
                    : "opacity-0 pl-0"
                }`}
              >
                {project.name}
              </p>
            </div>

            <div
              className={`video transition-all duration-700
          ${
            hoveredProjectId === project.id && index === 0
              ? "opacity-100 delay-1000"
              : "opacity-0"
          }
          `}
            >
              <iframe
                className="object-cover w-full h-full"
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/ekr2nIex040"
                title="review"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className={`w-full transition-all ease-in-out duration-1000 
          ${
            hoveredProjectId === project.id && index === 0
              ? "opacity-100 delay-1000"
              : "opacity-0 "
          }`}
            >
              <p className="text-white mt-2 text-xs text-center px-4">
                THE destination for mobile videos. On TikTok, short-form videos
                are exciting, spontaneous, and genuine.
              </p>
            </div>
            {/* Expanded Content */}

            <div
              className={`absolute flex flex-col space-y-2 bottom-0 w-full p-4 text-white text-xs transition-all ease-in-out duration-500 
          ${
            hoveredProjectId === project.id && index === 0
              ? "opacity-100 delay-1000"
              : "opacity-0 "
          }
          `}
            >
              <a href="/#" className="bg-red-500 text-white px-4 py-1 rounded-full mt-2 text-center hover:bg-red-400 duration-200 ease-out">
                View
              </a>
              <p className="font-semibold">Technologies</p>
              <div className="flex space-x-2">
                {project.tech.map((icon, idx) => (
                  <FontAwesomeIcon icon={icon} key={idx} size="xl" />
                ))}
              </div>
            </div>
          </divl>
        ))}
      </div>
      {/* Next and Previous Buttons */}
      <div className="absolute flex space-x-4">
        <button
          onClick={handlePrevious}
          className="bg-white/30 backdrop-blur-sm p-3 rounded-full absolute right-40 shadow  hover:bg-white/50 hover:scale-110 transition-all ease-in-out duration-500"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white/30 backdrop-blur-sm p-3 rounded-full absolute left-40 shadow  hover:bg-white/50 hover:scale-110 transition-all ease-in-out duration-500"
        >
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
