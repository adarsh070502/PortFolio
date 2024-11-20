import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add/remove className from body to disable scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <div className="Header">
      <div
        className={`Adarsh-Name ${isMenuOpen ? "mobile-nav-adarsh-name" : ""}`}
      >
        <Link className="nav-bar-link Adarsh-link" to="/">
          <h2 className={`${isMenuOpen ? "add-blue" : ""}`}>Adarsh</h2>
        </Link>
      </div>

      <div className={`nav-links ${isMenuOpen ? "dropdown" : ""}`}>
        <div>
          <a className="nav-bar-link" href="/">
            <h2>Home</h2>
          </a>
        </div>
        <div>
          <a className="nav-bar-link" href="/about-me">
            <h2>Profession Experience</h2>
          </a>
        </div>
        <div>
          <a className="nav-bar-link" href="/projects">
            <h2>Projects</h2>
          </a>
        </div>
        <div>
          <a className="nav-bar-link" href="/contact">
            <h2>Contact</h2>
          </a>
        </div>
      </div>

      <div
        className={`three-dashes ${isMenuOpen ? "cross-mark" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
}

export default Header;
