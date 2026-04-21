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

  // 1. Handles Dark/Light Mode Theme
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.className = theme;
  }, [darkMode]);

  // 2. Handles Scroll Animations
  useEffect(() => {
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 }); // Triggers when 10% of the section is visible

    // Grab all your sections
    const sections = document.querySelectorAll(
      '.skills-section, .projects, .experience, .resume, .education, .chart-section, .contact-section'
    );
    
    // Start observing them
    sections.forEach(sec => observer.observe(sec));

    // Cleanup function when component unmounts
    return () => {
      sections.forEach(sec => observer.unobserve(sec));
    };
  }, []); // Empty array means this only runs once when the app loads

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="App" id="top">
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




























// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import Resume from "./components/Resume";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import ChartSection from "./components/ChartSection";
// import Chartbot from "./components/Chatbot";
// import Contact from "./components/Contact";

// function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     const theme = darkMode ? "dark" : "light";
//     document.body.className = theme;
//   }, [darkMode]);

//   const toggleTheme = () => {
//     setDarkMode(prev => !prev);
//   };

//   return (
//     <div className="App" id="top">
//       <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

//       <Hero />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Resume />
//       <Education />
//       <ChartSection />
//       <Contact />
//       <Chartbot />
//     </div>
//   );
// }

// export default App;