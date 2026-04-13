import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>

      <div className="exp-card glass-card">
        <h3>Download My Resume</h3>

        <a href="/Gunjan_Kumar_Resume.pdf" download className="resume-btn">
          ⬇ Download Resume
        </a>
      </div>

    </section>
  );
}