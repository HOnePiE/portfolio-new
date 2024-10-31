import React, { useState } from "react";
import useTypingEffect from "../hooks/useTypingEffect.js";
import avatar from "../assets/img/z5942823963674_60840914407651fe4a3766dc5397dd6c.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const text =
    "I’m a passionate web developer with a keen eye for beautiful design and seamless user experiences. I love creating interactive websites that engage and delight users. Let's build something amazing together!";
  const typingText = useTypingEffect(text, 10);

  return (
    <div
      id="About-me"
      className="flex items-center justify-center min-h-screen p-6"
    >
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`bg-white/20 backdrop-blur-lg rounded-xl shadow-xl flex flex-col items-center p-8 transform transition-all duration-1000 ease-in-out ${
          isOpen ? "w-[32rem] h-[28rem]" : "w-60 h-44"
        }`}
      >
        <img
          src={avatar}
          alt="Profile Avatar"
          className={`rounded-full shadow-lg border-4 border-white/40 object-cover transform transition-all duration-500 ${
            isOpen ? "w-32 h-32 mb-4 scale-110" : "w-20 h-20 scale-100"
          }`}
        />

        <div
          className={`text-center text-white overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 max-h-full mt-4" : "opacity-0 max-h-0"
          }`}
        >
          <h1 className="text-2xl font-bold">Phạm Anh Tuấn</h1>
          <p className="text-lg mt-2">{typingText}</p>
        </div>

        <div className="flex justify-center m-4 space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61557402047973"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white"
              size="2x"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-white" size="2x" />
          </a>
          <a href="mailto:phamanhtuan95vn@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white"
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
