import React from 'react';
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1><span>GK</span>Developer</h1>
      </div>
      <nav className="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="education" smooth={true} duration={500}>
          <h4>Education</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
