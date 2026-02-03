import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mdaalvro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-container">
      <FadeInSection>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontFamily: "Source Code Pro",
              color: "#cdd6f4",
              fontSize: "3rem",
              marginBottom: "10px",
            }}
          >
            Initialize Handshake
          </h2>
        </div>
      </FadeInSection>

      <div className="contact-grid">
        <div className="socials-section">
          <FadeInSection delay="0.1s">
            <a
              href="https://github.com/Danieltun-ctrlc"
              target="_blank"
              rel="noreferrer"
              className="pixel-social-card"
            >
              <img
                src="/assets/github.png"
                alt="GitHub"
                className="social-icon-img"
              />
              <div className="social-text">
                <h3>GitHub</h3>
                <p>Check my repositories</p>
              </div>
            </a>
          </FadeInSection>
          <FadeInSection delay="0.2s">
            <a
              href="https://www.linkedin.com/in/myo-thet-tun-8a8bb430b/"
              target="_blank"
              rel="noreferrer"
              className="pixel-social-card"
            >
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="social-icon-img"
              />
              <div className="social-text">
                <h3>LinkedIn</h3>
                <p>Professional connection</p>
              </div>
            </a>
          </FadeInSection>
          <FadeInSection delay="0.3s">
            <a
              href="https://www.instagram.com/myo_thet_tun_co/"
              target="_blank"
              rel="noreferrer"
              className="pixel-social-card"
            >
              <img
                src="/assets/instagram.png"
                alt="Instagram"
                className="social-icon-img"
              />
              <div className="social-text">
                <h3>Instagram</h3>
                <p>Behind the scenes</p>
              </div>
            </a>
          </FadeInSection>
        </div>

        <FadeInSection delay="0.4s">
          <div className="contact-form-card">
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <h3
                  style={{
                    color: "var(--highlight)",
                    fontFamily: "Source Code Pro",
                  }}
                >
                  Transmission Received!
                </h3>
                <p
                  style={{ color: "var(--text-secondary)", marginTop: "10px" }}
                >
                  I will establish comms shortly.
                </p>
                <button
                  onClick={() => setStatus("")}
                  className="submit-btn"
                  style={{
                    marginTop: "20px",
                    width: "auto",
                    padding: "10px 20px",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="pixel-label">UID (Name)</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pixel-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="pixel-label">Comms Frequency (Email)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pixel-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="pixel-label">
                    Transmission Data (Message)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="pixel-input"
                    placeholder="Type your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Transmitting..."
                    : "Send Transmission"}
                </button>

                {status === "error" && (
                  <p
                    style={{
                      color: "#ff5f56",
                      marginTop: "15px",
                      fontFamily: "Source Code Pro",
                      fontSize: "0.9rem",
                    }}
                  >
                    Error: Transmission failed. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Contact;
