import axios from "axios";

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
    return response.data.data;
  });
  return blogs;
}
