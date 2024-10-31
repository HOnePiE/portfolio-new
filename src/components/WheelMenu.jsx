import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/img/z5942823963674_60840914407651fe4a3766dc5397dd6c.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const WheelMenu = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  // const handleAvatarClick = () => {
  //   navigate("/");
  // };
  return (
    <div className="fixed w-20 h-20 group z-50">
      <div className="absolute inset-0 flex justify-center items-center transition-transform duration-500 scale-0 group-hover:scale-100 delay-1000 group-hover:delay-0">
        <a
          // to="/skills"
          href="#Skills"
          className="menu-item text-xs font-semibold text-white text-shadow-soft absolute w-14 h-14 bg-white/30 backdrop-blur-sm flex items-center justify-center rounded-full transform translate-x-[80px] translate-y-[-27px] shadow-md duration-200 hover:bg-white/50 hover:scale-110"
          onMouseEnter={() => setHoveredItem("skills")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {hoveredItem === "skills" ? (
            "Skills"
          ) : (
            <FontAwesomeIcon icon={faJs} size="2x" />
          )}
        </a>
        <a
          // to="/projects"
          href="#Projects"
          className="menu-item text-xs font-semibold text-white text-shadow-soft absolute w-14 h-14 bg-white/30 backdrop-blur-sm flex items-center justify-center rounded-full transform  translate-x-[75px] translate-y-[40px] shadow-md duration-200 hover:bg-white/50 hover:scale-110"
          onMouseEnter={() => setHoveredItem("projects")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {hoveredItem === "projects" ? (
            "Projects"
          ) : (
            <FontAwesomeIcon icon={faRectangleList} size="2x" />
          )}
        </a>

        <a
          // to="/Resume"
          href="#Resume"
          className="menu-item text-xs font-semibold text-white text-shadow-soft absolute w-14 h-14 bg-white/30 backdrop-blur-sm flex items-center justify-center rounded-full transform translate-x-[20px] translate-y-[80px] shadow-md duration-200 hover:bg-white/50 hover:scale-110"
          onMouseEnter={() => setHoveredItem("Resume")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {hoveredItem === "Resume" ? (
            "Resume"
          ) : (
            <FontAwesomeIcon icon={faFile} size="xl" />
          )}
        </a>
      </div>
      <a href="#About-me">
        <div
          className="absolute w-20 h-20 p-2 bg-white/40 overflow-hidden backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center cursor-pointer 
        hover:bg-white/60 transition-all duration-300 group-hover:scale-125 group-hover:delay-0 delay-1000"
          // onClick={handleAvatarClick}
        >
          <img
            src={avatar}
            alt="Menu"
            className="rounded-full w-16 h-16 object-cover"
          />
        </div>
      </a>
    </div>
  );
};

export default WheelMenu;
