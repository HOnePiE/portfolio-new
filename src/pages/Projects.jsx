import React from "react";
import ProjectCard from "../components/ProjectCard.jsx"; // Assuming the ProjectCard is in the same folder

const projects = [
  {
    title: "Project 1",
    description: "This is a short description of Project 1.",
    rating: "4.5",
    imgSrc: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Project 2",
    description: "This is a short description of Project 2.",
    rating: "4.8",
    imgSrc: "https://via.placeholder.com/300",
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <div id="Projects" className="min-h-screen">
      <div className=" p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            rating={project.rating}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
