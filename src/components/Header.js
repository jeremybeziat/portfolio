import React from "react";
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="navigation">
        <nav>
          <NavLink to="/">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
