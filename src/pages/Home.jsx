import About from "../components/about/About";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";
import HomeProjects from "../components/HomeProjects/HomeProjects";
import SpeakingEvents from "../components/SpeakingEvents";
function Home() {
  return (
    <div>
      <About />
      <HomeProjects />
      <HomeBlogs />
      <SpeakingEvents />
    </div>
  );
}
export default Home;
