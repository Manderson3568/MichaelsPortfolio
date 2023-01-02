import HomeBlogs from "../components/HomeBlogs/HomeBlogs";

function Blogs({ blogs }) {
  return (
    <div>
      <HomeBlogs blogs={blogs} />
    </div>
  );
}
export default Blogs;
