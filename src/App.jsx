import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ChartSection from "./components/ChartSection";
import Chartbot from "./components/Chatbot";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.className = theme;
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Education />
      <ChartSection />
      <Contact />
      <Chartbot />
    </div>
  );
}

export default App;