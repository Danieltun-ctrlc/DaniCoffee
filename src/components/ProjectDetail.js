import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../data/projectsData";
import "../css/Projects.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project)
    return (
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        Project Not Found
      </div>
    );

  return (
    <div className="project-detail-container">
      <Link
        to="/projects"
        className="dashed-link"
        style={{ marginBottom: "20px", display: "inline-block" }}
      >
        ← Back to Projects
      </Link>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#fff" }}>
        {project.title}
      </h1>
      <p
        style={{
          color: "var(--highlight)",
          fontSize: "1.2rem",
          marginBottom: "30px",
          fontFamily: "Space Mono",
        }}
      >
        {project.tagline}
      </p>

      <motion.div
        className="intro-box"
        style={{
          padding: "0",
          overflow: "hidden",
          minHeight: "auto",
          marginBottom: "25px",
          background: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          layoutId={`project-image-${project.id}`}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          style={{
            width: "100%",
            height: "auto",

            display: "block",
            borderRadius: "10px",
          }}
        />
      </motion.div>

      <div
        className="project-links"
        style={{
          marginTop: "0",
          marginBottom: "40px",
          borderTop: "none",
          paddingTop: "0",
        }}
      >
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="link-btn"
        >
          GitHub Repo
        </a>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className="detail-card">
        <h3 className="detail-header" style={{ marginTop: 0 }}>
          Problem
        </h3>
        <p className="detail-text">{project.problem}</p>

        <h3 className="detail-header">Solution</h3>
        <p className="detail-text">{project.solution}</p>
      </div>

      <div className="detail-card">
        <h3 className="detail-header" style={{ marginTop: 0 }}>
          Key Features
        </h3>
        <ul style={{ paddingLeft: "20px", color: "var(--text-secondary)" }}>
          {project.features.map((feature, index) => (
            <li key={index} style={{ marginBottom: "10px", lineHeight: "1.6" }}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="detail-card">
        <h3 className="detail-header" style={{ marginTop: 0 }}>
          Tech Stack
        </h3>

        <div className="tech-category">
          <strong>Frontend:</strong>
          <div className="project-tags" style={{ marginTop: "10px" }}>
            {project.techStack.frontend.map((tech) => (
              <span key={tech} className="tech-tag-mini">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-category" style={{ marginTop: "20px" }}>
          <strong>Backend:</strong>
          <div className="project-tags" style={{ marginTop: "10px" }}>
            {project.techStack.backend.map((tech) => (
              <span key={tech} className="tech-tag-mini">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="tech-category" style={{ marginTop: "20px" }}>
          <strong>Tools:</strong>
          <div className="project-tags" style={{ marginTop: "10px" }}>
            {project.techStack.tools.map((tech) => (
              <span key={tech} className="tech-tag-mini">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-card">
        <h3 className="detail-header" style={{ marginTop: 0 }}>
          My Role
        </h3>
        <p className="detail-text">{project.myRole}</p>

        <h3 className="detail-header">Challenges & Solutions</h3>
        <p className="detail-text">{project.challenges}</p>

        <h3 className="detail-header">What I Learned</h3>
        <p className="detail-text">{project.learned}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
