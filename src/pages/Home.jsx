import About from "../components/about/About";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";
import HomeProjects from "../components/HomeProjects/HomeProjects";
function Home() {
  return (
    <div>
      <About />
      <HomeProjects />
      <HomeBlogs />
    </div>
  );
}
export default Home;
