import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function ChartSection() {

  const data = {
    labels: ["Python", "SQL", "ML", "Tableau", "Excel"],
    datasets: [
      {
        label: "Skill Level",
        data: [90, 90, 85, 90, 90],
      },
    ],
  };

  return (
    <section className="chart-section">
      <h2>My Data Skills</h2>

      <div className="chart-container">
        <Bar 
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    </section>
  );
}

