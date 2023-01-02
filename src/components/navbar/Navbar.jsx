import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import resume from "../../resources/PDFs/MichaelAndersonResume.pdf";
import "./NavbarStyle.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const icon = (
    <FontAwesomeIcon
      onClick={() => {
        setToggle(!toggle);
      }}
      icon={toggle ? faTimes : faBars}
    />
  );
  return (
    <nav>
      <Link className="navTitle" to="/">
        Michael Anderson
      </Link>

      <div>
        <ul className={toggle ? "navList active" : "navList"}>
          <li>
            <NavLink className={"redLine"} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"blueLine"} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={"greenLine"} to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className={"redLine"} to="/contact">
              Contact Me
            </NavLink>
          </li>
          <li>
            <a
              className={"blueLine"}
              href="https://www.linkedin.com/in/michaelandersondev/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              className={"greenLine"}
              href="https://github.com/Manderson3568"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              className={"button"}
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div id="mobile">
        <span className="icon">{icon}</span>
      </div>
    </nav>
  );
}
export default Navbar;
