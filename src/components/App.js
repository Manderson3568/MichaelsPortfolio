import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
