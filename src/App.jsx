import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services";
import Projects from "./components/Projects"
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className="bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
