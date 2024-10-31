import React from "react";

const ProjectCard = ({ title, description, rating, imgSrc }) => {
  return (
    <div className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      {/* Project Thumbnail */}
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />

      {/* Hover Details */}
      <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-yellow-400 text-lg">{rating} ★</span>
          <button className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
