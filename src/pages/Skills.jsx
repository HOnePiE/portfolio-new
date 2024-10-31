import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDotnet,
  DiMsqlServer,
} from "react-icons/di";
// JS, nodejs, reactjs, php, laravel, C#, .net, sql server, git, docker, react remix, tailwind
const skills = [
  { name: "JavaScript", icon: <DiJavascript1 size={60} /> },
  { name: "React", icon: <DiReact size={60} /> },
  { name: "Node.js", icon: <DiNodejs size={60} /> },
  { name: "MongoDB", icon: <DiMongodb size={60} /> },
  { name: "Git", icon: <DiGit size={60} /> },
  { name: "C#", icon: <TbBrandCSharp size={60} /> },
  { name: ".NET", icon: <AiOutlineDotNet size={60} /> },
  { name: "sqlServer", icon: <DiMsqlServer size={60} /> },
];

const Skills = () => {
  return (
    <div id="Skills" className="min-h-screen flex items-center justify-center">
      <div className="relative w-full h-full flex flex-wrap justify-center items-center p-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`blur-bubble m-4 bg-white/20 text-white backdrop-blur-lg rounded-full shadow-lg flex flex-col items-center justify-center 
            text-lg font-bold hover:scale-110 transition-transform duration-300`}
            style={{
              width: `150px`,
              height: `150px`,
            }}
          >
            {skill.icon}
            {/* <span className="mt-2">{skill.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
