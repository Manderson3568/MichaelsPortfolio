import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div
      style={{
        height: "200px",
        backgroundColor: "rgba(0,0,0,0.1)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "inline-block",
          verticalAlign: "top",
          marginRight: "10px",
          position: "absolute",
          top: "-10px",
          left: "120px",
        }}
      >
        <div
          // className="circles"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            // className="circle"
            style={{
              backgroundColor: "#e6020d",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              margin: "0 20px",
            }}
          ></div>
          <div
            // className="circle"
            style={{
              backgroundColor: "#3c5aa6",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              margin: "0 20px",
            }}
          ></div>
          <div
            // className="circle"
            style={{
              backgroundColor: "#32bd0a",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              margin: "0 20px",
            }}
          ></div>
        </div>
      </div>
      <Link to="/contact" className="contact">
        Get in Touch <FontAwesomeIcon icon={faArrowRight} />
      </Link>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          fontSize: "32px",
          justifyContent: "center",
        }}
      >
        <li>
          <a
            href="https://www.linkedin.com/in/michaelandersondev/"
            style={{ color: "black", margin: "10px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Manderson3568"
            style={{ color: "black", margin: "10px" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <p style={{ marginTop: "40px" }}>
        This design was inspired by <a href="#">Ahensy</a>
      </p>
    </div>
  );
}
export default Footer;
