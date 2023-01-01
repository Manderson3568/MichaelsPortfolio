import ColouredCircles from "../components/ColouredCircles";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";

function Blogs({ blogs }) {
  return (
    <div>
      {/* <h1>
        <ColouredCircles />
        Blogs
      </h1> */}
      <HomeBlogs blogs={blogs} />
      {/* <p style={{ textAling: "center" }}>More Blogs coming soon.... </p> */}
    </div>
  );
}
export default Blogs;
