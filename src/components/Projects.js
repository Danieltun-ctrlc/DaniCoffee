import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projectsData";
import FadeInSection from "./FadeInSection";
import "../css/Projects.css";

const Projects = () => {
  // 1. State for the Filter
  const [activeCategory, setActiveCategory] = useState("All");

  // 2. The Categories List
  const categories = [
    "All",
    "Mobile App",
    "Web App",
    "AI",
    "Games",
    "Other Programs",
  ];

  // 3. Filter Logic
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <motion.div
      className="projects-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FadeInSection>
        <div
          className="pixel-header-container"
          style={{ padding: "0 20px", marginBottom: "30px" }}
        >
          <div className="pixel-header-title">
            <span className="pixel-star">📂</span>
            Project Archives
          </div>
        </div>
      </FadeInSection>

      {/* --- 4. FILTER NAVIGATION --- */}
      <FadeInSection>
        <div className="filter-container">
          <div className="filter-nav">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* --- 5. PROJECTS GRID --- */}
      <div className="projects-grid-3">
        {/* AnimatePresence allows cards to fade out when filtered */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout // Helper for smooth reordering
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/projects/${project.id}`} className="project-card">
                  <div
                    className="project-image-container"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                      layoutId={`project-image-${project.id}`}
                      transition={{
                        duration: 0.6,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                    />

                    {project.featured && (
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          background: "var(--highlight)",
                          color: "#000",
                          padding: "2px 8px",
                          fontSize: "0.7rem",
                          fontWeight: "bold",
                          fontFamily: "Space Mono",
                          borderRadius: "4px",
                          zIndex: 10,
                        }}
                      >
                        FEATURED
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    {/* Category Tag above title */}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--highlight)",
                        fontFamily: "Space Mono",
                        textTransform: "uppercase",
                      }}
                    >
                      [{project.category}]
                    </span>
                    <h3 className="project-title" style={{ marginTop: "5px" }}>
                      {project.title}
                    </h3>
                    <p className="project-desc">{project.tagline}</p>
                    <div className="project-tags">
                      {[
                        ...project.techStack.frontend,
                        ...project.techStack.backend,
                      ]
                        .slice(0, 4)
                        .map((tech) => (
                          <span key={tech} className="tech-tag-mini">
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            // Fallback if no projects match
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "50px",
                color: "var(--text-secondary)",
              }}
            >
              <p>No projects found in this directory.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;
