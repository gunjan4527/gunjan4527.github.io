import React, { useEffect } from "react";

export default function Education() {

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <section className="education">
      <h2>Education</h2>

      <div className="timeline-content glass-card">
        {/* B.Tech */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>B.Tech in Computer Science Engineering</h3>
            <h4>World College of Technology and Management</h4>
            <p className="university">
              Maharshi Dayanand University, Rohtak, Haryana
            </p>
            <p className="duration">2023– 2027 (Pursuing)</p>
          </div>
        </div>

        {/* 12th */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Senior Secondary (12th)</h3>
            <h4>Gurukul Vidyapeeth</h4>
            <p className="duration">2021 – 2022</p>
          </div>
        </div>

        {/* 10th */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Secondary (10th)</h3>
            <h4>Trident Public School</h4>
            <p className="duration">2019 – 2020</p>
          </div>
        </div>

      </div>
    </section>
  );
}