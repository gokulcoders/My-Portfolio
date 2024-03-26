import React from 'react'
import {Link} from "react-scroll";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1><span>GK</span>Developer</h1>
      </div>
      <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
        <h4>
            About Me
        </h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
        <h4>
            Skills
        </h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
        <h4>
            Projects
        </h4>
        </Link>
        <Link to="education" smooth={true} duration={500}>
        <h4>
            Education
        </h4>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
        <h4>
            Contact
        </h4>
        </Link>
        <h4 className="header_rightbutton">Join With Me</h4>
      
      </div>
    </div>
  )
}

export default Header
