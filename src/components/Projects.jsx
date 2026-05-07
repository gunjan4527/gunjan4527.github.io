import React from "react";

export default function Projects() {

  const projects = [
    {
      title: "Customer Behavior Analysis",
      desc: "Data analytics project showcasing customer behavior analysis using python sql and power bi",
      github: "https://github.com/gunjan4527/Customer-Behavior-Analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization, SQL, Power BI"
    },
    {
      title: "HR Analytics Employee-Attrition-Prediction",
      desc: "Analyzed 1,470+ employee records using Python and SQL to uncover attrition patterns across departments, job roles, and salary bands.",
      github: "https://github.com/gunjan4527/HR-Analytics-Employee-Attrition-Prediction",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, SQL, Power BI, Pandas, Seaborn, Scikit-Learn"
    },
    {
      title: "Restaurent Data Analysis",
      desc: "I Analyzed 9,551 restaurants across 15 countries using Pandas,Numpy,Data visualization, and ML",
      github: "https://github.com/gunjan4527/Restaurant-Data-Analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization, ML"
    },
    {
      title: "Pizza Sales Analysis",
      desc: "Analyzed pizza sales data to find trends and improve business decisions.",
      github: "https://github.com/gunjan4527/pizza-sales-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "SQL, Power BI"
    },
    {
      title: "Banking Domain",
      desc: "Analyzed a banking dataset of 3,000 clients using Python and Power BI.",
      github: "https://github.com/gunjan4527/Banking-Domain",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization, Power BI"
    },
    {
      title: "Finance Dashboard",
      desc: "Built financial dashboard to track revenue, expenses, and KPIs.",
      github: "https://github.com/gunjan4527/finance-dashboard",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Power BI, Excel"
    },
    {
      title: "Medical Context-Based Chatbot (RAG)",
      desc: "Built a RAG-based medical chatbot for context-aware question answering",
      github: "https://github.com/gunjan4527/Medical-Context-Based-Chatbot-RAG-",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python 3.10, Machine Learning /NLP,LLM & Embeddings,Backend & API,Frontend / UI"
    },
    {
      title: "COVID-19 Analysis",
      desc: "Analyzed COVID-19 dataset to visualize trends and insights.",
      github: "https://github.com/gunjan4527/Covid-19-Data-Analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Pandas, Matplotlib"
    },
    {
      title: "Excel Dashboard",
      desc: "Interactive Excel dashboard for business insights using pivot tables and charts.",
      github: "https://github.com/gunjan4527/excel-dashboard",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Excel, Pivot Tables"
    },
    {
      title: "Spotify Analysis",
      desc: "Explored Spotify data to analyze top songs, artists, and trends.",
      github: "https://github.com/gunjan4527/spotify-analysis",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, Data Visualization"
    },
    {
      title: "IMDb top 1000 Movies",
      desc: "IMDb Top 1000 Movies Dashboard Using Tableau",
      github: "https://github.com/gunjan4527/IMDB-Tableau-dashboard",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Tableau"
    },
    {
      title: "AI-powered Crop Recommendation System",
      desc: "Crop Recommendation System that helps farmers choose the most suitable crops based on soil nutrients and environmental conditions.",
      github: "https://github.com/gunjan4527/Crop-Recoomendation-System",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python, ML,Pandas, NumPy, EDA,Flask (REST API)"
    },
     {
      title: "Paper 2 Code — Research Paper to Code Generator",
      desc: "Built an AI-powered tool that automatically converts academic research papers (PDFs) into executable Python code,bridging the gap between research and implementation.",
      github: "https://github.com/gunjan4527?tab=repositories",
      linkedin: "https://www.linkedin.com/in/gunjan-kumar-5866042aa",
      tech: "Python • LangChain • OpenAI API • HuggingFace • Streamlit • arXiv API"
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