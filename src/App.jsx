import React from "react";
import {SpeedInsights} from '@vercel/speed-insights/react';
import { MotionConfig } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
// import AppRouter from "./AppRouter";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import backgroundImage from "./assets/img/clay-banks-u27Rrbs9Dwc-unsplash.jpg"
import AboutMe from "./pages/AboutMe.jsx";
import Project from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Skills from "./pages/Skills.jsx";

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div className="background max-w-full overflow-x-hidden">
          {/* Fixed layer so the photo isn't stretched across the whole page */}
          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-slate-800"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Header />
          <main>
            <AboutMe/>
            <Skills/>
            <Project/>
            <Resume/>
          </main>
          <Footer />
          <SpeedInsights/>
        </div>
      </MotionConfig>
    </Router>
  );
}

export default App;
