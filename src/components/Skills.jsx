import React from "react";

export default function Skills() {

  const skillGroups = [
    {
      title: "Languages & Databases",
      skills: [
        { name: "Python", img: "/python image.png", color: "#3776AB" },
        { name: "SQL", img: "/sql-3d-icon-png.webp", color: "#8f0000" },
        { name: "PostgreSQL", img: "/download (2).png", color: "#336791" },
        { name: "R", img: "/download (2).jpg", color: "#339164" },
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "Pandas", img: "/pandas-logo-png_seeklogo-459105.png", color: "#150458" },
        { name: "NumPy", img: "/images.png", color: "#013243" },
        { name: "Excel", img: "/download (5).png", color: "#0a0143" },
        { name: "EDA", img: "/download (6).png", color: "#013243" },
        { name: "Data Cleaning", img: "/10179126.png", color: "#430101" },
        { name: "Statistical Analysis", img: "/statistical-analysis-flat-illustration_120816-4224.avif", color: "#013243" },
      ]
    },
    {
      title: "BI & Visualization",
      skills: [
        { name: "Power BI", img: "/power-bi-2021.png", color: "#F2C811" },
        { name: "Tableau", img: "/tableau-software.png", color: "#E97627" },
        { name: "Matplotlib", img: "/download (4).png", color: "#27e944" },
        { name: "Seaborn", img: "/download (1).jpg", color: "#F2C811" }
      ]
    },
    {
      title: "Data Science & ML Libraries",
      skills: [
        { name: "NLP", img: "/images (1).png", color: "#F2C811" },
        { name: "TensorFlow", img: "/TensorFlow_logo.svg.png", color: "#E97627" },
        { name: "Scikit-Learn", img: "/download (9).png", color: "#27e944" },
        { name: "PyTorch", img: "/download (8).png", color: "#f211f2" },
        { name: "NLTK", img: "/0_zKRz1UgqpOZ4bvuA.png", color: "#45f211" },
        { name: "XGBoost", img: "/xgboost.png", color: "#9811f2" },
      ]
    },
    {
      title: "MLOps,Tools & Cloud",
      skills: [
        { name: "Docker", img: "/download.jpg", color: "#2496ED" },
        { name: "Hugging Face", img: "/download (10).png", color: "#24edb1" },
        { name: "AWS", img: "/Amazon_Web_Services-Logo.wine.png", color: "#FF9900" },
        { name: "GCP", img: "/download (1).png", color: "#4285F4" },
        { name: "GitHub", img: "/download (3).png", color: "#000000" },
        { name: "Jupyter Notebook", img: "/Jupyter_logo.svg.png", color: "#5500ff" },
        { name: "VS-Code", img: "/download (7).png", color: "#FF9900" },
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