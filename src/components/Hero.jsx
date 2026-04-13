import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="glass hero-content">

        {/*   PROFILE IMAGE (TOP CENTER) */}
        <div className="hero-image">
          <img src="Gunjan_photo.png" alt="profile" />
        </div>

        <div className="hero-details">
          {/*   NAME */}
          <h1 className="hero-title">Gunjan Kumar</h1>

          {/*   ROLE */}
          <h2 className="hero-role">
            Data Analyst | Data Scientist
          </h2>

          {/*   BUTTONS */}
          <div className="hero-buttons">

            <a href="/Gunjan_Kumar_Resume.pdf" download className="btn primary">
              📄 Resume
            </a>

            <a
              href="https://github.com/gunjan4527"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gunjan-kumar-5866042aa"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              🔗 LinkedIn
            </a>

          </div>

          {/*   TAGLINE */}
          <p className="hero-tagline">
            I am an aspiring Data Scientist with a strong background in data analysis, statistical thinking, and machine learning. I enjoy solving complex problems by applying data-driven methodologies and building predictive models.

            My technical skills include Python (Pandas, NumPy, Scikit-learn), SQL, data visualization tools like Power BI, and basic machine learning algorithms such as regression and classification.

            I have worked on multiple projects involving exploratory data analysis, feature engineering, and model building, with a focus on delivering insights that create real-world impact. I am actively seeking opportunities to grow as a Data Scientist and contribute to innovative data-driven solutions.

          </p>

        </div>
      </div>

    </section>
  );
}