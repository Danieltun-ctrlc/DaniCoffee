import React from "react";
import FadeInSection from "./FadeInSection";
import "../css/About.css";

const About = () => {
  const socialStats = [
    { name: "GUTS", icon: "🦁" },
    { name: "KNOWLEDGE", icon: "📚" },
    { name: "THINKING", icon: "🧠" },
    { name: "CHARM", icon: "✨" },
    { name: "KINDNESS", icon: "❤️" },
    { name: "PROFICIENCY", icon: "🛠️" },
  ];

  const hobbies = [
    { name: "Gym", img: "/assets/hobbies/gym.png" },
    { name: "Gaming", img: "/assets/hobbies/gaming.png" },
    { name: "Reading", img: "/assets/hobbies/reading.png" },
    { name: "Drone Soccer", img: "/assets/hobbies/drone.png" },
  ];
  const playCoinSound = () => {
    const audio = new Audio("/assets/sounds/coin.mp3");

    audio.volume = 0.5;

    audio.currentTime = 0;

    audio.play().catch((error) => console.log("Audio play failed:", error));
  };

  const certificates = [
    {
      date: "2024-5",
      title: "Agile Foundations",
      issuer: "Doug Rose",
      status: "Verified",
      link: "/assets/certs/agile.pdf",
    },
    {
      date: "2025-06",
      title: "React (Basic) Certificate",
      issuer: "HackerRank",
      status: "Verified",
      link: "/assets/certs/react_basic.pdf",
    },
    {
      date: "2025-08",
      title: "Node.js Essential Training",
      issuer: "LinkedIn Learning",
      status: "Verified",
      link: "/assets/certs/nodejs-essential.pdf",
    },
    {
      date: "2025-07",
      title: "Photoshop 2021 Quick Start",
      issuer: "LinkedIn Learning",
      status: "Verified",
      link: "/assets/certs/photoshop-2021.pdf",
    },
    {
      date: "2025-07",
      title: "JavaScript Web Form Programming",
      issuer: "LinkedIn Learning",
      status: "Verified",
      link: "/assets/certs/js-web-forms.pdf",
    },
    {
      date: "2025-06",
      title: "JavaScript Enhancing the DOM",
      issuer: "LinkedIn Learning",
      status: "Verified",
      link: "/assets/certs/js-dom.pdf",
    },
  ];

  return (
    <div className="about-container">
      <FadeInSection>
        <div
          className="pixel-header-container"
          style={{ marginBottom: "40px" }}
        >
          <div className="pixel-header-title">
            <span className="pixel-star">☺</span>
            User Profile
          </div>
        </div>
      </FadeInSection>

      <div className="about-grid">
        <div className="left-column-stack">
          <FadeInSection>
            <div className="char-card" style={{ marginBottom: "30px" }}>
              <div className="char-img-container">
                <img
                  src="/assets/red_post.gif"
                  alt="Myo Thet Tun Avatar"
                  className="char-img"
                />
              </div>

              <h2
                style={{
                  fontFamily: "Source Code Pro",
                  color: "#cdd6f4",
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                }}
              >
                Myo Thet Tun
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Full Stack Developer
              </p>

              <div className="char-stats">
                <div className="stat-row">
                  <span className="stat-label">LVL (Age)</span>
                  <span className="stat-value">19</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Location</span>
                  <span className="stat-value">Singapore 🇸🇬</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Guild</span>
                  <span className="stat-value">Republic Poly</span>
                </div>
              </div>

              <a
                href="/assets/resume.pdf"
                target="_blank"
                className="resume-btn"
              >
                Download Data (CV)
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay="0.2s">
            <div className="terminal-window">
              <div
                className="terminal-header"
                style={{
                  background: "#282a36",
                  borderBottom: "1px solid var(--text-secondary)",
                }}
              >
                <div className="terminal-dots">
                  <div
                    className="dot-btn"
                    style={{ background: "#bd93f9" }}
                  ></div>
                </div>
                <span>certs.dat — System Log</span>
              </div>

              <div className="terminal-body" style={{ padding: "15px" }}>
                <p
                  className="bio-text"
                  style={{ marginBottom: "15px", fontSize: "0.85rem" }}
                >
                  <span
                    style={{
                      color: "var(--highlight)",
                      fontFamily: "Source Code Pro",
                    }}
                  >
                    &gt; Verified Credentials:
                  </span>
                </p>

                <div className="cert-list">
                  {certificates.map((cert, idx) => (
                    <a
                      key={idx}
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-item"
                    >
                      <span
                        className="cert-date"
                        style={{ minWidth: "70px", fontSize: "0.75rem" }}
                      >
                        [{cert.date}]
                      </span>

                      <div className="cert-details">
                        <span
                          className="cert-title"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {cert.title}
                        </span>
                        <span
                          className="cert-issuer"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {cert.issuer}
                        </span>
                      </div>

                      <span
                        className="cert-status"
                        style={{ fontSize: "0.6rem", padding: "1px 4px" }}
                      >
                        {cert.status === "Verified" ? "✔" : "★"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <div className="right-column-stack">
          <FadeInSection delay="0.2s">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div
                    className="dot-btn"
                    style={{ background: "#ff5f56" }}
                  ></div>
                  <div
                    className="dot-btn"
                    style={{ background: "#ffbd2e" }}
                  ></div>
                  <div
                    className="dot-btn"
                    style={{ background: "#27c93f" }}
                  ></div>
                </div>
                <span>bio.txt — Read Only</span>
              </div>

              <div className="terminal-body">
                <p className="bio-text">
                  <span
                    style={{
                      color: "var(--highlight)",
                      fontFamily: "Source Code Pro",
                    }}
                  >
                    &gt; Initializing user narrative...
                  </span>
                </p>

                <p className="bio-text">
                  Hello! I'm <span className="bio-highlight">Myo Thet Tun</span>
                  . While my class is Full Stack Developer, I view real life as
                  the ultimate RPG that I'm constantly trying to optimize.
                </p>

                <p className="bio-text">
                  My passion for coding goes far beyond school assignments. I
                  love the chaos of creation building{" "}
                  <span className="bio-highlight">side projects</span> just to
                  see if I can. Whether it's experimenting with a new framework
                  or hacking together a tool to solve a random problem, I am
                  always building something new.
                </p>

                <p className="bio-text">
                  Currently, I am on a main quest for{" "}
                  <span className="bio-highlight">Self-Improvement</span>. I
                  treat personal growth like a stat system grinding to level up
                  my Guts by taking risks, increasing Knowledge through reading,
                  refining my Proficiency and Thinking in Code + Engineering,
                  Charm and Kindness through empathy and communication.
                </p>

                <h3 className="social-stats-header">
                  Current Stat Progression (Coins)
                </h3>
                <div className="social-stats-grid">
                  {socialStats.map((stat, index) => (
                    <div
                      key={index}
                      className="stat-coin-slot"
                      onClick={playCoinSound}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`/assets/coins/${stat.name.toLowerCase()}_coin.png`}
                        alt={stat.name}
                        className="real-coin-img"
                      />
                      <span className="stat-coin-label">{stat.name}</span>
                    </div>
                  ))}
                </div>

                <p className="bio-text">
                  When I'm not grinding code or improving stats, I'm training on
                  playing the{" "}
                  <span className="bio-highlight">Drone Soccer Striker</span>,
                  proving that quick reflexes apply to both flying and
                  debugging.
                </p>

                <h3 className="social-stats-header">Hobbies (Guild)</h3>

                <div className="inventory-grid">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="inventory-item">
                      <img
                        src={hobby.img}
                        alt={hobby.name}
                        className="inv-icon-img"
                      />
                      <span className="inv-name">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default About;
