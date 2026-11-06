import React from "react";
import useTypingEffect from "../hooks/useTypingEffect.js";
import useExpandable from "../hooks/useExpandable.js";
import useViewportWidth from "../hooks/useViewportWidth.js";
import avatar from "../assets/img/z5942823963674_60840914407651fe4a3766dc5397dd6c.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const text =
  "I’m a passionate web developer with a keen eye for beautiful design and seamless user experiences. I love creating interactive websites that engage and delight users. Let's build something amazing together!";

const contacts = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61557402047973",
    icon: faFacebook,
  },
  { label: "GitHub", href: "https://github.com/HOnePiE", icon: faGithub },
  {
    label: "Email",
    href: "mailto:phamanhtuan95vn@gmail.com",
    icon: faEnvelope,
  },
];

const AboutMe = () => {
  const { isOpen, handlers } = useExpandable();
  const viewportWidth = useViewportWidth();
  const typingText = useTypingEffect(text, 10, isOpen);

  return (
    <section
      id="About-me"
      className="flex items-center justify-center min-h-screen p-6"
    >
      <motion.div
        {...handlers}
        initial={false}
        animate={{
          width: isOpen ? Math.min(512, viewportWidth - 48) : 272,
          height: isOpen ? "auto" : 290,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 10,
        }}
        className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl flex flex-col items-center p-8 overflow-hidden"
      >
        {/* logo */}
        <img
          src={avatar}
          alt="Phạm Anh Tuấn"
          className={`rounded-full shadow-lg border-4 border-white/40 object-cover flex-none transform transition-all ease-in-out duration-500 ${
            isOpen ? "w-32 h-32" : "w-24 h-24"
          }`}
        />
        {/*  des  */}
        <div className="text-center text-white mt-4 w-full text-shadow-md">
          <h1 className="text-2xl font-bold">Phạm Anh Tuấn</h1>
          <p className="text-sm uppercase tracking-widest mt-1">Web Developer</p>
          <p className="sr-only">{text}</p>
          {isOpen && (
            <p aria-hidden="true" className="relative text-lg mt-3">
              {/* Invisible copy reserves the height so the card doesn't jump while typing */}
              <span className="invisible">{text}</span>
              <span className="absolute inset-0">{typingText}</span>
            </p>
          )}
        </div>
        {/* contact icon */}
        <div className="flex justify-center mt-5 space-x-6">
          {contacts.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="transition-transform duration-200 hover:scale-110"
            >
              <FontAwesomeIcon icon={icon} className="text-white" size="2x" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
