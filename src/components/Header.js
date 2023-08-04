// import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../assets/styles/hamburgermenu.scss";

function Header() {
  // const handleScrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Ajoutez ici la logique pour activer/désactiver le mode sombre
    // par exemple, en ajoutant/remplaçant des classes CSS ou en utilisant un contexte global de thème.
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }

    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isMenuOpen, isDarkMode]);

  return (
    <header>
      <div className="name">
        <p>Jérémy Béziat</p>
        <p>Portfolio</p>
      </div>
      <div className="menu-toggle" onClick={toggleDarkMode}>
        <div className={`mode-indicator ${isDarkMode ? "dark" : ""}`} />
      </div>
      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""} ${
          isDarkMode ? "dark-mode" : ""
        }`}
      >
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="cross"
                d="M22.7185 25L12.5 14.7654L2.28149 25L0 22.7185L10.2346 12.5L0 2.28149L2.28149 0L12.5 10.2346L22.7185 0.0160672L24.9839 2.28149L14.7654 12.5L24.9839 22.7185L22.7185 25Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="35"
              height="25"
              viewBox="0 0 35 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M0 25V20.8333H35V25H0ZM0 14.5833V10.4167H35V14.5833H0ZM0 4.16667V0H35V4.16667H0Z"
                  fill="white"
                />
              </g>
            </svg>
          )}
        </div>
        <div className="menu-content">
          <ul>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
