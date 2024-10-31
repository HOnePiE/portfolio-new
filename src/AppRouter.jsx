import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resume from './pages/Resume';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default AppRouter;
