import Navbar from "./navbar/Navbar";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import "../App.css";
import { GetBlogs } from "../HelperFunctions/BlogHelpers.jsx";
function App() {
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   const temp = GetBlogs();
  //   // console.log(temp);
  // }, []);
  const { data, isLoading, error } = useQuery("launches", () => {
    const obj = GetBlogs();
    // console.log(obj);
    return obj;
  });
  if (isLoading) return "loading...";
  if (error) return error;
  // console.log(data.user.publication.posts);
  // setBlogs(data.user.publication.posts);
  // console.log(blogs);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home blogs={data.user.publication.posts} />}
        />
        <Route
          path="/blogs"
          element={<Blogs blogs={data.user.publication.posts} />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
