import axios from "axios";
import { useQuery } from "react-query";
import "./HomeBlogsStyle.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// requesting articles from hashnode API

function HomeBlogs() {
  const endpoint = "https://api.hashnode.com/";
  const articleQuery = `
{
  user(username: "manderson3568"){
    publication{
      posts{
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
  const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: articleQuery,
      },
    }).then((response) => {
      // const arr = response.data.data.user.publication.posts.slice(0, 3);
      // console.log(arr);
      return response.data.data;
      // return arr;
    });
  });
  if (isLoading) return "loading...";
  if (error) return error;
  return (
    <div>
      <h1 className="blogHeading">Blogs</h1>
      <div className="blogCont">
        {data.user.publication.posts.slice(0, 4).map((post, i) => {
          return (
            <div key={`post${i}`} className="post">
              <h3>{post.title}</h3>
              <div className="imgCont">
                <img
                  src={post.coverImage}
                  alt={`${post.title} cover image`}
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
      <div className="centre">
        <Link to="/blogs" className="contact">
          All Articles <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
export default HomeBlogs;
