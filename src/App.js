import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navi";
import Home from "./components/home";
import Background from "./components/Background";
import MobileNav from "./components/MobileNav";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Background />
      <Navbar />
      <MobileNav />

      <div key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
