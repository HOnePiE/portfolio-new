import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import AppRouter from "./AppRouter";
import Header from "./components/Header.jsx";
import backgroundImage from "./assets/img/clay-banks-u27Rrbs9Dwc-unsplash.jpg"
import AboutMe from "./pages/AboutMe.jsx";
import Project from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Skills from "./pages/Skills.jsx";

function App() {
  return (
    <Router>
      <div
        className="background max-w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <AboutMe/>
        <Skills/>
        <Project/>
        <Resume/>
      </div>
    </Router>
  );
}

export default App;
