import { useEffect } from "react";
import About from "../components/about/About";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";
import HomeProjects from "../components/HomeProjects/HomeProjects";
import SpeakingEvents from "../components/SpeakingEvents";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Home({ blogs }) {
  useEffect(() => {
    console.log(blogs);
  });
  return (
    <div>
      <About />
      <HomeProjects />
      <HomeBlogs blogs={blogs.slice(0, 4)} />
      <div className="centre">
        <Link to="/blogs" className="contact">
          All Articles <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <SpeakingEvents />
    </div>
  );
}
export default Home;
