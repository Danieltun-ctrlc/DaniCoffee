import Navbar from "./navi";
import FadeInSection from "./FadeInSection";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import LocationMap from "./LocationMap";

const Home = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="hero-grid">
          <FadeInSection>
            <div className="intro-box">
              <div>
                <div className="intro-heading">
                  Hey! I'm{" "}
                  <span className="intro-name"> MYO THET TUN Daniel</span>
                </div>

                <p className="intro-text">
                  I'm currently pursuing a Diploma in Information Technology @{" "}
                  <a
                    href="https://www.rp.edu.sg"
                    target="_blank"
                    rel="noreferrer"
                    className="dashed-link"
                  >
                    Republic Polytechnic
                  </a>
                  .
                  <br />
                  <br />I am now specializing in{" "}
                  <span style={{ color: "var(--highlight)" }}>
                    Full Stack / AI
                  </span>{" "}
                  and currently building{" "}
                  <span style={{ color: "var(--highlight)" }}>
                    web solutions for real-world problems
                  </span>{" "}
                  such as RP community app and an{" "}
                  <Link className="dashed-link" to="/projects">
                    AI-based scam protection app
                  </Link>{" "}
                  to make the digital space safer.
                </p>
              </div>

              <div className="social-row">
                <a href="#git" className="social-item">
                  GitHub
                </a>
                <span className="separator">|</span>
                <a href="#link" className="social-item">
                  LinkedIn
                </a>
                <span className="separator">|</span>
                <a href="#x" className="social-item">
                  X
                </a>
                <span className="separator">|</span>
                <a href="/about" className="social-item">
                  More →
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="right-column">
              <div
                className="location-box"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <LocationMap />
              </div>

              <div className="notable-box">
                <div className="avatar-container">
                  <img
                    src="/assets/me.jpg"
                    alt="Myo Thet Tun"
                    className="avatar-img"
                  />
                </div>

                <h4
                  style={{
                    margin: "0 0 15px 0",
                    textTransform: "uppercase",
                    borderBottom: "2px solid var(--highlight)",
                    color: "#cdd6f4",
                  }}
                >
                  Achievements
                </h4>

                <div className="achievements-list">
                  <Link to="/achievements" className="pixel-tag">
                    🏆 2025 Drone Soccer National Striker
                  </Link>

                  <Link to="/achievements" className="pixel-tag">
                    🧠 Brainhack 2025 Finalist
                  </Link>

                  <Link to="/achievements" className="pixel-tag">
                    🌱 2024 Sustainability Winner
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
          <div className="grid-modi">
            <FadeInSection>
              <div className="tech-stack-box">
                <h4
                  style={{
                    margin: "0",
                    paddingBottom: "15px",
                    textTransform: "uppercase",
                    borderBottom: "1px solid var(--highlight)",
                    display: "block",
                    textAlign: "center",
                    color: "#cdd6f4",
                    marginBottom: "20px",
                  }}
                >
                  Tech Stack
                </h4>

                <div className="tech-grid">
                  <div className="tech-pill">
                    <i className="devicon-mysql-original colored"></i>
                    <span>MySQL</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-python-plain colored"></i>
                    <span>Python</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-react-original colored"></i>
                    <span>React</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-javascript-plain colored"></i>
                    <span>JavaScript</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-nodejs-plain-wordmark colored"></i>
                    <span>Node.js</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-typescript-plain colored"></i>
                    <span>TypeScript</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-react-original colored"></i>
                    <span>React Native</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-express-original icon-white"></i>
                    <span>Express</span>
                  </div>

                  <div className="tech-pill">
                    <i className="devicon-flask-original icon-white"></i>
                    <span>Flask</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="projects-section">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                    marginBottom: "20px",
                  }}
                >
                  <div className="pixel-header-container">
                    <div className="pixel-header-title">
                      <span className="pixel-star">✦</span>
                      Featured Projects
                    </div>

                    <a href="/projects" className="view-all-btn">
                      View all <span>→</span>
                    </a>
                  </div>
                </div>

                <div className="projects-grid">
                  <Link to="/projects" className="project-card">
                    <div className="project-image-container">
                      <img
                        src="/assets/wiseguard.png"
                        alt="WiseGuard"
                        className="project-img"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">WiseGuard</h3>
                      <p className="project-desc">
                        A smart cybersecurity platform for smart cities. It
                        empowers citizens to report scams and build resilience
                        through
                        <span style={{ color: "var(--highlight)" }}>
                          {" "}
                          AI-powered threat detection
                        </span>
                        .
                      </p>
                      <div className="project-tags">
                        <span className="tech-tag-mini">React Native</span>
                        <span className="tech-tag-mini">Expo</span>
                        <span className="tech-tag-mini">Python</span>
                        <span className="tech-tag-mini">JavaScript</span>
                        <span className="tech-tag-mini">TypeScript</span>
                        <span className="tech-tag-mini">Flask</span>
                        <span className="tech-tag-mini">NativeWind</span>
                      </div>
                    </div>
                  </Link>

                  <Link to="/projects" className="project-card">
                    <div className="project-image-container">
                      <img
                        src="/assets/rpcommunity.jpg"
                        alt="RP Community Hub"
                        className="project-img"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">RP Community Hub</h3>
                      <p className="project-desc">
                        A centralized, gamified platform for RP students
                        featuring
                        <span style={{ color: "var(--highlight)" }}>
                          {" "}
                          smart filtering{" "}
                        </span>
                        for study notes and event organization.
                      </p>
                      <div className="project-tags">
                        <span className="tech-tag-mini">React</span>
                        <span className="tech-tag-mini">Node.js</span>
                        <span className="tech-tag-mini">Tailwind</span>
                      </div>
                    </div>
                  </Link>

                  {/* PROJECT 2: RP COMMUNITY HUB */}
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="timeline-section">
                <div className="toggle-box">
                  <button
                    className={`tab-btn ${activeTab === "work" ? "active" : ""}`}
                    onClick={() => setActiveTab("work")}
                  >
                    Work
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                    onClick={() => setActiveTab("education")}
                  >
                    Education
                  </button>
                </div>

                {/* 2. THE LIST (Separate Box) */}
                <div className="timeline-list">
                  {activeTab === "work" && (
                    <>
                      {/* WA-EN */}
                      <div
                        className={`timeline-item ${expandedId === 1 ? "expanded" : ""}`}
                        onClick={() => toggleExpand(1)}
                      >
                        <div className="timeline-icon">
                          <img
                            src="/assets/wa-en.png"
                            alt="Wa-En"
                            className="timeline-img"
                          />
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <div>
                              <div className="role-title">Wa-En</div>
                              <span className="company-name">
                                Part-Time Bartender
                              </span>
                            </div>
                            <div className="timeline-date">
                              Apr 2024 - Present
                            </div>
                          </div>
                          <div className="timeline-details">
                            <p>
                              • Specialized in mixology and customer service.
                            </p>
                            <p>
                              • Managed inventory and maintained bar hygiene.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* STARBUCKS */}
                      <div
                        className={`timeline-item ${expandedId === 2 ? "expanded" : ""}`}
                        onClick={() => toggleExpand(2)}
                      >
                        <div className="timeline-icon">
                          <img
                            src="/assets/starbucks.png"
                            alt="Starbucks"
                            className="timeline-img"
                          />
                        </div>
                        <div className="timeline-content">
                          <div className="timeline-header">
                            <div>
                              <div className="role-title">Starbucks</div>
                              <span className="company-name">
                                Part-Time Barista
                              </span>
                            </div>
                            <div className="timeline-date">
                              Dec 2024 - Mar 2025
                            </div>
                          </div>
                          <div className="timeline-details">
                            <p>• Delivered excellent coffee experiences.</p>
                            <p>• Handled peak hour crowds efficiently.</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* EDUCATION */}
                  {activeTab === "education" && (
                    <div
                      className={`timeline-item ${expandedId === 3 ? "expanded" : ""}`}
                      onClick={() => toggleExpand(3)}
                    >
                      <div className="timeline-icon">
                        <img
                          src="/assets/rp.png"
                          alt="RP"
                          className="timeline-img"
                        />
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <div>
                            <div className="role-title">
                              Republic Polytechnic
                            </div>
                            <span className="company-name">
                              Year 2 Diploma In DTECH
                            </span>
                          </div>
                          <div className="timeline-date">2024 - Present</div>
                        </div>
                        <div className="timeline-details">
                          <p>• Specializing in Full Stack & AI.</p>
                          <p>• Active in RP Tech Community.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
