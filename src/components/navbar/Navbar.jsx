import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/michaelandersondev/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Manderson3568">
              <FontAwesomeIcon icon={faGithub} />
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
