import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowLeft,
  faCartShopping,
  faLaptopCode,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import useExpandable from "../hooks/useExpandable.js";
import useViewportWidth from "../hooks/useViewportWidth.js";

// To add a demo or source link to a project, add it to its `links` array.
const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    icon: faLaptopCode,
    cover: "from-sky-500 to-indigo-700",
    description:
      "The site you are looking at: a single-page portfolio with animated glass-style sections.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    links: [
      {
        label: "Source code",
        href: "https://github.com/HOnePiE/portfolio-new",
      },
    ],
  },
  {
    id: 2,
    name: "E-commerce Website",
    icon: faCartShopping,
    cover: "from-amber-500 to-rose-600",
    description: "An online store built with HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [],
  },
  {
    id: 3,
    name: "WordPress Store",
    icon: faWordpress,
    cover: "from-teal-500 to-blue-800",
    description:
      "An e-commerce website built on WordPress and deployed on Linux with AWS.",
    tech: ["WordPress", "Linux", "AWS"],
    links: [],
  },
  {
    id: 4,
    name: "Music Sound Pad",
    icon: faMusic,
    cover: "from-fuchsia-500 to-purple-800",
    description: "A music sound pad app.",
    tech: [],
    links: [],
  },
];

const spring = { type: "spring", stiffness: 200, damping: 22 };

const ProjectsCarousel = () => {
  const [projectList, setProjectList] = useState(projects);
  const { isOpen, setIsOpen, handlers } = useExpandable();
  const viewportWidth = useViewportWidth();

  const handleNext = () => {
    setIsOpen(false);
    setProjectList((prevProjects) => [
      ...prevProjects.slice(1),
      prevProjects[0],
    ]);
  };

  const handlePrevious = () => {
    setIsOpen(false);
    setProjectList((prevProjects) => [
      prevProjects[prevProjects.length - 1],
      ...prevProjects.slice(0, -1),
    ]);
  };

  const position = projects.indexOf(projectList[0]) + 1;

  return (
    <section
      id="Projects"
      className="min-h-screen flex flex-col items-center justify-center text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-8 text-shadow-md">My Projects</h1>
      <div className="relative w-full max-w-sm h-[26rem] flex justify-center items-center mb-6">
        {projectList.map((project, index) => {
          const isFront = index === 0;
          const isExpanded = isFront && isOpen;

          return (
            <motion.article
              key={project.id}
              {...(isFront ? handlers : {})}
              tabIndex={isFront ? 0 : -1}
              aria-hidden={!isFront}
              aria-label={isFront ? project.name : undefined}
              initial={false}
              animate={{
                // Back cards would show through the glass behind the text
                opacity: isOpen && !isFront ? 0 : 1,
                scale: isExpanded ? 1 : 0.9,
                width: isExpanded ? Math.min(320, viewportWidth - 32) : 224,
                height: isExpanded ? 384 : 288,
                translateX: index * -15,
                translateY: index * 15,
                zIndex: 50 - index,
              }}
              transition={spring}
              className="absolute ml-5 bg-white/20 backdrop-blur-lg rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              {/* Project cover, shrinks into an app icon when expanded */}
              <motion.div
                initial={false}
                animate={{
                  top: isExpanded ? 16 : 12,
                  left: isExpanded ? 16 : 12,
                  width: isExpanded ? 44 : 200,
                  height: isExpanded ? 44 : 264,
                }}
                transition={spring}
                className={`absolute flex items-center justify-center rounded-md bg-gradient-to-br ${project.cover}`}
              >
                <motion.span
                  initial={false}
                  animate={{ fontSize: isExpanded ? "1.25rem" : "4.5rem" }}
                  transition={spring}
                >
                  <FontAwesomeIcon icon={project.icon} />
                </motion.span>
                {!isExpanded && (
                  <h2 className="absolute bottom-0 inset-x-0 rounded-b-md p-3 text-lg font-semibold text-center bg-gradient-to-b from-transparent to-black/60">
                    {project.name}
                  </h2>
                )}
              </motion.div>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute inset-0 p-4 flex flex-col text-shadow-sm"
                >
                  <h2 className="min-h-[2.75rem] pl-14 flex items-center text-lg font-semibold leading-tight">
                    {project.name}
                  </h2>
                  <p className="mt-4">{project.description}</p>

                  <div className="mt-auto space-y-3">
                    {project.tech.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold mb-1.5">
                          Technologies
                        </p>
                        <ul className="flex flex-wrap gap-1.5 text-xs">
                          {project.tech.map((name) => (
                            <li
                              key={name}
                              className="bg-black/40 rounded-full px-2.5 py-1"
                            >
                              {name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.links.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-black text-white text-sm font-bold px-4 py-1.5 rounded-lg text-center hover:bg-white hover:text-black duration-200 ease-out"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.article>
          );
        })}
      </div>
      {/* Carousel Controls */}
      <div className="flex items-center space-x-4">
        <button
          type="button"
          aria-label="Previous project"
          onClick={handlePrevious}
          className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow hover:bg-white/50 hover:scale-110 active:scale-50 transition-all ease-in-out duration-500"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <span aria-live="polite" className="text-sm font-semibold text-shadow-md">
          {position} / {projects.length}
        </span>
        <button
          type="button"
          aria-label="Next project"
          onClick={handleNext}
          className="bg-white/30 backdrop-blur-sm p-3 rounded-lg shadow hover:bg-white/50 hover:scale-110 active:scale-50 transition-all ease-in-out duration-500"
        >
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </button>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
