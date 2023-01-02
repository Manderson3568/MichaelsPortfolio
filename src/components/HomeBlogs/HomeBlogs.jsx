import "./HomeBlogsStyle.css";

import ColouredCircles from "../ColouredCircles";

// requesting articles from hashnode API

function HomeBlogs({ blogs }) {
  return (
    <div className="homeBlogs">
      <h1 className="blogHeading">
        <ColouredCircles />
        Blogs
      </h1>
      <div className="blogCont">
        {blogs.map((post, i) => {
          return (
            <div key={`post${i}`} className="post">
              <h3>{post.title}</h3>
              <div className="imgCont">
                <img
                  src={post.coverImage}
                  alt={`${post.title} cover`}
                  className="coverImage"
                />
              </div>
              <p>{post.brief}</p>
              <a
                href={`https://fromtransporttotheterminal.hashnode.dev/${post.slug}`}
                className="button"
              >
                Full Article
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HomeBlogs;
