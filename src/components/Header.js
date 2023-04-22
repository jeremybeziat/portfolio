import { NavLink } from "react-router-dom";

function Header() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="navigation">
        <nav>
          <NavLink onClick={handleScrollToTop} to="/">
            About
          </NavLink>
          <NavLink onClick={handleScrollToTop} to="/work">
            Work
          </NavLink>
          <NavLink onClick={handleScrollToTop} to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="hide"></div>
    </header>
  );
}
export default Header;
