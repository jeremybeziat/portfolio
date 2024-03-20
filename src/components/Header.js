import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // Récupérer l'URL de la page actuelle
  const location = useLocation();

  // Fonction pour déterminer si la page actuelle correspond à la page "About"
  const isAboutPage = location.pathname === "/about";
  const isWorkPage = location.pathname === "/work";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  });

  return (
    <header>
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        <a title="home" href="/" className="logo logo-phone">
          {
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
              <path
                class="cls-1"
                d="m237.39,70.57c-.39.95-.75,1.91-1.09,2.88.34-1.02.71-1.98,1.09-2.88Z"
              />
              <path
                class="cls-1"
                d="m237.39,70.57l.2,4.19c-.2-2.67-.2-4.19-.2-4.19Z"
              />
              <path
                class="cls-2"
                d="m356.2,285.39c-7.96-28.18-39.79-40.26-39.79-40.26,23.88-22.15,9.94-42.28,9.94-42.28,15.92,2.01,29.85,36.24,29.85,36.24-2.72-45.3-15.28-72.96-35.69-86.54-1.05-.69-2.11-1.37-3.11-2.13-15.29-11.55-22.88-28.1-22.88-28.1-5.88,29.77,23.04,45.85,23.86,46.3-70.5-15.66-80.06-79.45-81.37-96.46-.2-2.67-.2-4.19-.2-4.19-.39.95-.74,1.91-1.08,2.88-.02.05-.04.09-.04.14-2.95,8.9-4.28,21.95-3.41,37.19.34,5.85.9,11.62,1.72,17.3v.03c6.02,30.06,20.29,57.88,27.44,70.51,0,.02,0,.03.02.04l4.01,6.8c.04.06.07.1.09.14.07.11.1.16.1.16,0,0,39.71-11.64,24.88,9.21-2.69,3.78-15.79,14.1-31.84,14.1-17.91,0-4.6-16.87-4-17.56l.02-.02c-29.85,0-41.79,30.2-41.79,30.2,0-38.25,29.85-42.28,29.85-42.28l-43.78-144.95-43.78,144.95s29.85,4.03,29.85,42.28c0,0-11.94-30.2-41.79-30.2l.02.02c.59.69,13.91,17.56-4,17.56-16.04,0-29.15-10.32-31.84-14.1-14.84-20.85,24.88-9.21,24.88-9.21,0,0,.03-.05.1-.16.02-.04.05-.08.09-.14l4.01-6.8s0-.02.02-.04c7.15-12.63,21.42-40.45,27.44-70.51v-.03c.82-5.68,1.38-11.45,1.72-17.3.87-15.24-.46-28.29-3.41-37.19,0-.05-.02-.09-.04-.14-.34-.97-.69-1.93-1.08-2.88,0,0,0,1.52-.2,4.19-1.3,17.01-10.86,80.8-81.37,96.46.82-.45,29.74-16.53,23.86-46.3,0,0-7.59,16.55-22.88,28.1-1.01.76-2.07,1.44-3.11,2.13-20.41,13.58-32.97,41.24-35.69,86.54,0,0,13.93-34.23,29.85-36.24,0,0-13.94,20.13,9.94,42.28,0,0-31.84,12.08-39.79,40.26,0,0,19.9-16.1,31.84-14.09,0,0-25.87,20.13-23.88,62.41,0,0,28.55-18.69,39.36,4.8,1.58,3.42,2.35,7.15,2.51,10.92,1.26,30.23,17.83,50.71,17.83,50.71,0,0-1.89-24.84,3.53-42.88.35-1.13,1.57-1.76,2.66-1.34,5.86,2.25,24.82,20.35,73.39,140.83-.4-2.26-25.99-147.13-41.77-171.09,0,0,0,21.7-7.52,21.02-1.37-.13-2.58-1.03-3.24-2.26-6.95-12.88-4.35-41.63-4.35-41.63,0,0-14.31,24.25-24.68-5.31.58.51,17.87,15.63,15.91-12.09-1.91-27.01-12.96-35.53-13.87-36.22,2.28.37,75.55,12.85,75.55,62.39,0,0-15.92-26.17-39.8-30.19,0,0,41.79,50.33,53.73,144.94,11.94-94.61,53.73-144.94,53.73-144.94-23.88,4.02-39.8,30.19-39.8,30.19,0-49.54,73.27-62.02,75.55-62.39-.91.69-11.96,9.21-13.87,36.22-1.96,27.72,15.33,12.6,15.91,12.09-10.37,29.56-24.68,5.31-24.68,5.31,0,0,2.6,28.75-4.35,41.63-.66,1.23-1.87,2.13-3.24,2.26-7.52.68-7.52-21.02-7.52-21.02-15.79,23.96-41.38,168.83-41.77,171.09,48.57-120.48,67.53-138.58,73.39-140.83,1.09-.42,2.31.21,2.66,1.34,5.42,18.04,3.53,42.88,3.53,42.88,0,0,16.58-20.48,17.83-50.71.16-3.77.93-7.5,2.51-10.92,10.81-23.49,39.36-4.8,39.36-4.8,1.99-42.28-23.88-62.41-23.88-62.41,11.94-2.01,31.84,14.09,31.84,14.09Z"
              />
            </svg>
          }
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <button className="menu">CLOSE</button>
          ) : (
            <button className="menu">MENU</button>
          )}
        </div>
        <div className="menu-content">
          <ul>
            <li>
              <Link to="/about" className={isAboutPage ? "active" : ""}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/work" className={isWorkPage ? "active" : ""}>
                WORK
              </Link>
            </li>
          </ul>
        </div>
        <a href="mailto:epurevision@gmail.com" className="btn-contact">
          @epurevision
        </a>
      </div>
      <nav className="navigation-desktop">
        <div className="nav">
          <a title="home" href="/" className="logo">
            {
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
                <path
                  class="cls-1"
                  d="m237.39,70.57c-.39.95-.75,1.91-1.09,2.88.34-1.02.71-1.98,1.09-2.88Z"
                />
                <path
                  class="cls-1"
                  d="m237.39,70.57l.2,4.19c-.2-2.67-.2-4.19-.2-4.19Z"
                />
                <path
                  class="cls-2"
                  d="m356.2,285.39c-7.96-28.18-39.79-40.26-39.79-40.26,23.88-22.15,9.94-42.28,9.94-42.28,15.92,2.01,29.85,36.24,29.85,36.24-2.72-45.3-15.28-72.96-35.69-86.54-1.05-.69-2.11-1.37-3.11-2.13-15.29-11.55-22.88-28.1-22.88-28.1-5.88,29.77,23.04,45.85,23.86,46.3-70.5-15.66-80.06-79.45-81.37-96.46-.2-2.67-.2-4.19-.2-4.19-.39.95-.74,1.91-1.08,2.88-.02.05-.04.09-.04.14-2.95,8.9-4.28,21.95-3.41,37.19.34,5.85.9,11.62,1.72,17.3v.03c6.02,30.06,20.29,57.88,27.44,70.51,0,.02,0,.03.02.04l4.01,6.8c.04.06.07.1.09.14.07.11.1.16.1.16,0,0,39.71-11.64,24.88,9.21-2.69,3.78-15.79,14.1-31.84,14.1-17.91,0-4.6-16.87-4-17.56l.02-.02c-29.85,0-41.79,30.2-41.79,30.2,0-38.25,29.85-42.28,29.85-42.28l-43.78-144.95-43.78,144.95s29.85,4.03,29.85,42.28c0,0-11.94-30.2-41.79-30.2l.02.02c.59.69,13.91,17.56-4,17.56-16.04,0-29.15-10.32-31.84-14.1-14.84-20.85,24.88-9.21,24.88-9.21,0,0,.03-.05.1-.16.02-.04.05-.08.09-.14l4.01-6.8s0-.02.02-.04c7.15-12.63,21.42-40.45,27.44-70.51v-.03c.82-5.68,1.38-11.45,1.72-17.3.87-15.24-.46-28.29-3.41-37.19,0-.05-.02-.09-.04-.14-.34-.97-.69-1.93-1.08-2.88,0,0,0,1.52-.2,4.19-1.3,17.01-10.86,80.8-81.37,96.46.82-.45,29.74-16.53,23.86-46.3,0,0-7.59,16.55-22.88,28.1-1.01.76-2.07,1.44-3.11,2.13-20.41,13.58-32.97,41.24-35.69,86.54,0,0,13.93-34.23,29.85-36.24,0,0-13.94,20.13,9.94,42.28,0,0-31.84,12.08-39.79,40.26,0,0,19.9-16.1,31.84-14.09,0,0-25.87,20.13-23.88,62.41,0,0,28.55-18.69,39.36,4.8,1.58,3.42,2.35,7.15,2.51,10.92,1.26,30.23,17.83,50.71,17.83,50.71,0,0-1.89-24.84,3.53-42.88.35-1.13,1.57-1.76,2.66-1.34,5.86,2.25,24.82,20.35,73.39,140.83-.4-2.26-25.99-147.13-41.77-171.09,0,0,0,21.7-7.52,21.02-1.37-.13-2.58-1.03-3.24-2.26-6.95-12.88-4.35-41.63-4.35-41.63,0,0-14.31,24.25-24.68-5.31.58.51,17.87,15.63,15.91-12.09-1.91-27.01-12.96-35.53-13.87-36.22,2.28.37,75.55,12.85,75.55,62.39,0,0-15.92-26.17-39.8-30.19,0,0,41.79,50.33,53.73,144.94,11.94-94.61,53.73-144.94,53.73-144.94-23.88,4.02-39.8,30.19-39.8,30.19,0-49.54,73.27-62.02,75.55-62.39-.91.69-11.96,9.21-13.87,36.22-1.96,27.72,15.33,12.6,15.91,12.09-10.37,29.56-24.68,5.31-24.68,5.31,0,0,2.6,28.75-4.35,41.63-.66,1.23-1.87,2.13-3.24,2.26-7.52.68-7.52-21.02-7.52-21.02-15.79,23.96-41.38,168.83-41.77,171.09,48.57-120.48,67.53-138.58,73.39-140.83,1.09-.42,2.31.21,2.66,1.34,5.42,18.04,3.53,42.88,3.53,42.88,0,0,16.58-20.48,17.83-50.71.16-3.77.93-7.5,2.51-10.92,10.81-23.49,39.36-4.8,39.36-4.8,1.99-42.28-23.88-62.41-23.88-62.41,11.94-2.01,31.84,14.09,31.84,14.09Z"
                />
              </svg>
            }
          </a>
          <ul className="link-page">
            <li>
              <Link to="/about" className={isAboutPage ? "active" : ""}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/work" className={isWorkPage ? "active" : ""}>
                WORK
              </Link>
            </li>
          </ul>
          <a href="mailto:epurevision@gmail.com" className="btn-contact">
            @epurevision
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Header;
