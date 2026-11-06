import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiMsqlServer,
} from "react-icons/di";
import {
  SiCss3,
  SiDocker,
  SiHtml5,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiRemix,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import useViewportWidth from "../hooks/useViewportWidth.js";

const skills = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: DiJavascript1 },
  { name: "React", Icon: DiReact },
  { name: "React Remix", Icon: SiRemix },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: DiNodejs },
  { name: "PHP", Icon: SiPhp },
  { name: "Laravel", Icon: SiLaravel },
  { name: "WordPress", Icon: SiWordpress },
  { name: "C#", Icon: TbBrandCSharp },
  { name: ".NET", Icon: AiOutlineDotNet },
  { name: "SQL Server", Icon: DiMsqlServer },
  { name: "MySQL", Icon: SiMysql },
  { name: "MongoDB", Icon: DiMongodb },
  { name: "Git", Icon: DiGit },
  { name: "Docker", Icon: SiDocker },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isSmallScreen = useViewportWidth() < 640;
  const bubbleSize = isSmallScreen ? 96 : 150;
  const hoveredSize = isSmallScreen ? 96 : 190;
  const iconSize = isSmallScreen ? 32 : 56;

  return (
    <section
      id="Skills"
      className="min-h-screen flex flex-col items-center justify-center text-white py-16 px-2 sm:px-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-shadow-md">My Skills</h1>
      <ul className="w-full max-w-6xl flex flex-wrap justify-center items-center">
        {skills.map(({ name, Icon }, index) => (
          <motion.li
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={name}
            className="blur-bubble m-1.5 sm:m-3 bg-white/20 backdrop-blur-lg rounded-full shadow-lg flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm leading-tight"
            initial={false}
            animate={{
              width: hoveredIndex === index ? hoveredSize : bubbleSize,
              height: hoveredIndex === index ? hoveredSize : bubbleSize,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 16,
            }}
          >
            <Icon size={iconSize} aria-hidden="true" />
            <span className="mt-1 px-2 text-shadow-sm">{name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
