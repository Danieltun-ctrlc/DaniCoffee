import { NavLink } from "react-router-dom";
import "../App.css";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <NavLink to="/" className="mobile-nav-item" end>
        <img src="/assets/home.png" alt="Home" className="nav-icon-img" />
        <span className="nav-label">Home</span>
      </NavLink>

      <NavLink to="/projects" className="mobile-nav-item">
        <img src="/assets/projects.png" alt="Work" className="nav-icon-img" />
        <span className="nav-label">Work</span>
      </NavLink>

      <NavLink to="/achievements" className="mobile-nav-item">
        <img
          src="/assets/achievements.png"
          alt="Awards"
          className="nav-icon-img"
        />
        <span className="nav-label">Awards</span>
      </NavLink>

      <NavLink to="/contact" className="mobile-nav-item">
        <img src="/assets/contact.png" alt="Contact" className="nav-icon-img" />
        <span className="nav-label">Contact</span>
      </NavLink>

      <NavLink to="/about" className="mobile-nav-item">
        <img
          src="/assets/about.png"
          alt="About"
          className="nav-icon-img red"
          style={{ margin: 0, padding: 0 }}
        />
        <span
          className="nav-label"
          style={{ position: "relative", bottom: "12" }}
        >
          Me
        </span>
      </NavLink>
    </nav>
  );
};

export default MobileNav;
