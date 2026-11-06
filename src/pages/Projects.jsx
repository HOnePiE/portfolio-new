import React, { useState } from "react";
import { delay, motion } from "framer-motion";
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
];

const ProjectsCarousel = () => {
  const [projectList, setProjectList] = useState(projects);
  const [hoveredProjectId, setHoveredProjectId] = useState(false);

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
      className="min-h-screen flex flex-col items-center justify-center text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="relative w-96 h-80 flex justify-center items-center mb-6">
        {projectList.map((project, index) => (
          <motion.div
            key={project.id}
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(false)}
            initial={false}
            animate={{
              scale: hoveredProjectId === project.id ? 1 : 0.9,
              width:
                hoveredProjectId === project.id && index === 0
                  ? "20rem"
                  : "14rem",
              height:
                hoveredProjectId === project.id && index === 0
                  ? "24rem"
                  : "18rem",
              translateX: index * -15,
              translateY: index * 15,
              zIndex: index === 0 ? 50 : 50 - index,
            }}
            transition={{
              zIndex: { type: "spring", stiffness: 200, damping: 50 },
              translateX: { type: "spring", stiffness: 200, damping: 15 },
              translateY: { type: "spring", stiffness: 200, damping: 15 },
              scale: {
                // duration: hoveredProjectId === project.id ? 2 : 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              },
              width: {
                duration: 0.7,
                type: "spring",
                stiffness: 350,
                damping: 40,
                delay: hoveredProjectId === project.id ? 1 : 0,
              },
              height: {
                duration: 0.7,
                type: "spring",
                stiffness: 350,
                damping: 40,
                delay: hoveredProjectId === project.id ? 1 : 0,
              },
            }}
            className="absolute ml-5 flex flex-col bg-white/20 backdrop-blur-lg rounded-lg overflow-hidden shadow-md cursor-pointer"
          >
            <div className="flex flex-row items-center space-x-2 p-4">
              {/* App Icon and Background */}
              <motion.div
                className="absolute z-10 rounded-md"
                animate={{
                  width:
                    hoveredProjectId === project.id && index === 0
                      ? "2.75rem"
                      : "12rem", // 11 => 2.75rem, 48 => 12rem
                  height:
                    hoveredProjectId === project.id && index === 0
                      ? "2.75rem"
                      : "15rem", // 11 => 2.75rem, 60 => 15rem
                  top:
                    hoveredProjectId === project.id && index === 0
                      ? "0.5rem"
                      : "1.25rem",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: hoveredProjectId ? 1 : 0,
                }}
              >
                <motion.img
                  src={project.image}
                  alt="App Icon"
                  className="object-cover object-center rounded-md w-full h-full"
                  animate={{
                    opacity: hoveredProjectId === project.id ? 1 : 0.9,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 50,
                    delay: hoveredProjectId === project.id ? 0.7 : 0,
                  }}
                />
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute rounded-md inset-0 bg-gradient-to-b from-transparent to-black"
                  animate={{
                    opacity: hoveredProjectId === project.id ? 0 : 0.7,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 17,
                  }}
                ></motion.div>
              </motion.div>

              {/* Project Name */}
              <motion.p
                className="text-white text-lg font-semibold"
                animate={{
                  opacity:
                    hoveredProjectId === project.id && index === 0 ? 1 : 0,
                  paddingLeft:
                    hoveredProjectId === project.id && index === 0
                      ? "3rem"
                      : "0rem",
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 17,
                  delay: hoveredProjectId === project.id ? 1 : 0,
                }}
              >
                {project.name}
              </motion.p>
            </div>

            {/* Review Video */}
            <motion.div
              className="video"
              animate={{
                opacity: hoveredProjectId === project.id && index === 0 ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 50,
                delay: hoveredProjectId === project.id ? 1 : 0,
              }}
            >
              <iframe
                className="object-cover w-full h-full"
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/ekr2nIex040"
                title="review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Additional Content */}
            <motion.div
              className="w-full"
              animate={{
                opacity: hoveredProjectId === project.id && index === 0 ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: hoveredProjectId === project.id ? 1 : 0,
              }}
            >
              <p className="text-white mt-2 text-xs px-4">
                THE destination for mobile videos. On TikTok, short-form videos
                are exciting, spontaneous, and genuine.
              </p>
            </motion.div>

            {/* Expanded Content */}
            <motion.div
              className="absolute flex flex-col space-y-2 bottom-0 w-full p-4 text-white text-xs"
              animate={{
                opacity: hoveredProjectId === project.id && index === 0 ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: hoveredProjectId === project.id ? 1 : 0,
              }}
            >
              <a
                href="/#"
                className="bg-black text-white font-bold px-4 py-1 rounded-lg mt-2 text-center hover:bg-white hover:text-black duration-200 ease-out"
              >
                View
              </a>
              <p className="font-semibold">Technologies</p>
              <div className="flex space-x-2">
                {project.tech.map((icon, idx) => (
                  <FontAwesomeIcon icon={icon} key={idx} size="xl" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* Carousel Controls */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow hover:bg-white/50 hover:scale-110 active:scale-50 transition-all ease-in-out duration-500"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow hover:bg-white/50 hover:scale-110 active:scale-50 transition-all ease-in-out duration-500"
          >
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </div>
    </div>
  );
};

export default ProjectsCarousel;
