import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>
    </>
  );
}

export default App;
