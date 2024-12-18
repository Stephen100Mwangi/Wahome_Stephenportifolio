/* eslint-disable no-unused-vars */
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Testimonials from "./pages/Testimonials";
import Skills from "./pages/Skills";
import Blogs from "./pages/Blogs";
import Awards from "./pages/Awards";
import HireMe from "./pages/HireMe";
import FigmaProjects from "./pages/FigmaProjects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-back">
        <Toaster position="top-left" reverseOrder={false} />
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <h1 className="text-center mt-10 -mb-10 text-orange text-2xl">
          Figma
          <span className="text-card">Projects</span>
        </h1>
        <FigmaProjects />
        <Skills />
        <Awards />
        <Blogs />
        <HireMe />
        <Testimonials />

        <Routes>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/aboutMe" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/hireMe" element={<HireMe />}></Route>
          <Route path="/contacts" element={<Footer />}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
