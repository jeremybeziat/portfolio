import React from "react";
import { useState } from "react";
function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  console.log(showLinks);
  return (
    <header>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className="navbar__links">
          {/* <li className="navbar__item">
            <a href="/" className="navbar__link">
              hOmE
            </a>
          </li> */}
          <li className="navbar__item">
            <a href="/profil" className="navbar__link">
              AbOut
            </a>
          </li>
          <li className="navbar__item">
            <a href="/contact" className="navbar__link">
              cOntAct
            </a>
          </li>
        </ul>
        <button title="menu" className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}
export default Header;
