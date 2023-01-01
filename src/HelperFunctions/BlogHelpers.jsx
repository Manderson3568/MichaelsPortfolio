import axios from "axios";
import { useQuery } from "react-query";

export function GetBlogs() {
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
  const blogs = axios({
    url: endpoint,
    method: "POST",
    data: {
      query: articleQuery,
    },
  }).then((response) => {
    // const arr = response.data.data.user.publication.posts.slice(0, 3);
    // console.log(arr);
    // console.log(response.data.data);
    return response.data.data;
    // return arr;
  });
  return blogs;
}
