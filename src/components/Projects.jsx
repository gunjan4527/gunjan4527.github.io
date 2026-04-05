import React from "react";

export default function Projects() {

  const projects = [
    {
      title: "Excel Dashboard",
      desc: "Interactive Excel dashboard for business insights using pivot tables and charts.",
      github: "https://github.com/gunjan4527/excel-dashboard",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Excel, Pivot Tables"
    },
    {
      title: "Pizza Sales Analysis",
      desc: "Analyzed pizza sales data to find trends and improve business decisions.",
      github: "https://github.com/gunjan4527/pizza-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "SQL, Power BI"
    },
    {
      title: "Finance Dashboard",
      desc: "Built financial dashboard to track revenue, expenses, and KPIs.",
      github: "https://github.com/gunjan4527/finance-dashboard",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Power BI, Excel"
    },
    {
      title: "COVID-19 Analysis",
      desc: "Analyzed COVID-19 dataset to visualize trends and insights.",
      github: "https://github.com/gunjan4527/covid-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Pandas, Matplotlib"
    },
    {
      title: "Spotify Analysis",
      desc: "Explored Spotify data to analyze top songs, artists, and trends.",
      github: "https://github.com/gunjan4527/spotify-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization"
    },
    {
      title: "Banking Domain",
      desc: "Analyzed a banking dataset of 3,000 clients using Python and Power BI.",
      github: "https://github.com/gunjan4527/spotify-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization, Power BI"
    },
    {
      title: "Customer Behavior Analysis",
      desc: "Data analytics project showcasing customer behavior analysis using python sql and power bi",
      github: "https://github.com/gunjan4527/spotify-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization, SQL, Power BI"
    },
    {
      title: "Restaurent Data Analysis",
      desc: "I Analyzed 9,551 restaurants across 15 countries using Pandas,Numpy,Data visualization, and ML",
      github: "https://github.com/gunjan4527/Restaurant-Data-Analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization, ML"
    },
    {
      title: "IMDb top 1000 Movies",
      desc: "IMDb Top 1000 Movies Dashboard Using Tableau",
      github: "https://github.com/gunjan4527/spotify-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Tableau"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((p, i) => (
          <div key={i} className="project-card glass-card">

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <p className="tech">{p.tech}</p>

            {/* 🔥 LINKS SECTION */}
            <div className="project-links">

              <a href={p.github} target="_blank" rel="noreferrer">
                <span>💻</span> GitHub
              </a>

              <a href={p.linkedin} target="_blank" rel="noreferrer">
                <span>🔗</span> LinkedIn
              </a>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}