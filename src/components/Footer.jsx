import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 pb-6 text-center text-sm text-white text-shadow-md">
      © {new Date().getFullYear()} Phạm Anh Tuấn ·{" "}
      <a href="mailto:phamanhtuan95vn@gmail.com" className="underline">
        phamanhtuan95vn@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
