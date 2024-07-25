import { useState } from "react";
import logo from "../assets/logo.png";
import menuicon from "../assets/menu-icon.png";
import "./Navbar.css";
import { useEffect } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobilemenu, setMobileMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    );
  }, []);

  function ToggleEvent() {
    mobilemenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" />
      <ul className={mobilemenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menuicon} className="menu-icon" onClick={ToggleEvent} />
    </nav>
  );
}

export default Navbar;
