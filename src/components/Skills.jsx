import React from "react";
import {
  SiPython,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiReact,
  SiJavascript,
} from "react-icons/si";
import { FaChartBar, FaDatabase } from "react-icons/fa";

import "../style.css";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Data Analysis", icon: <FaChartBar /> },
    { name: "Database", icon: <FaDatabase /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
        
      {/* 🔥 Power BI + Tableau as images */}
      <div className="extra-skills">
        <div className="skill-card">
          <img src="power-bi-2021.png" alt="Power BI" />
          <p>Power BI</p>
        </div>

        
        <div className="skill-card">
          <img src="download.png" alt="Excel" />
          <p>Excel</p>
        </div>

        <div className="skill-card">
          <img src="tableau-software.png" alt="Tableau" />
          <p>Tableau</p>
        </div>
      </div>
      </div>

    </section>
  );
}