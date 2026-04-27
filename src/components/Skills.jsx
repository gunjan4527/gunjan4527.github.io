import React from "react";

export default function Skills() {

  const skillGroups = [
    {
      title: "Languages & Databases",
      skills: [
        { name: "Python", img: "/python image.png", color: "#3776AB" },
        { name: "SQL", img: "/sql-3d-icon-png.webp", color: "#00758F" },
        { name: "PostgreSQL", img: "/download (2).png", color: "#336791" },
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", img: "/pandas-logo-png_seeklogo-459105.png", color: "#150458" },
        { name: "NumPy", img: "/images.png", color: "#013243" },
        { name: "TensorFlow", img: "/TensorFlow_logo.svg.png", color: "#FF6F00" },
        { name: "PyTorch", img: "/images.jpg", color: "#EE4C2C" },
        { name: "XGBoost", img: "/xgboost.png", color: "#FF6F00" },
        { name: "NLTK", img: "/0_zKRz1UgqpOZ4bvuA.png", color: "#4B8BBE" }
      ]
    },
    {
      title: "BI & Visualization",
      skills: [
        { name: "Power BI", img: "/power-bi-2021.png", color: "#F2C811" },
        { name: "Tableau", img: "/tableau-software.png", color: "#E97627" },
        { name: "Matplotlib", img: "/download (4).png", color: "#E97627" },
        { name: "Seaborn", img: "/download (1).jpg", color: "#F2C811" }
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Docker", img: "/download.jpg", color: "#2496ED" },
        { name: "AWS", img: "/Amazon_Web_Services-Logo.wine.png", color: "#FF9900" },
        { name: "GCP", img: "/download (1).png", color: "#4285F4" },
        { name: "GitHub", img: "/download (3).png", color: "#000000" }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">💻 Tech Stack</h2>

      {skillGroups.map((group, i) => (
        <div key={i} className="skill-group">

          <h3>{group.title}</h3>

          <div className="skills-row">

            {group.skills.map((skill, index) => (
              <div
                key={index}
                className="skill-badge glass"
                style={{ backgroundColor: skill.color }}
              >
                <img src={skill.img} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}

          </div>
        </div>
      ))}
    </section>
  );
}