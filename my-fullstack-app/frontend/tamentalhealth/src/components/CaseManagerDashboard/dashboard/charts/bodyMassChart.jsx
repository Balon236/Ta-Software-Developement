import React from "react";
import "./style/bodyMassChart.css";

const BodyMassChart = () => {
  const data = [
    { label: "Normal", value: 40 },
    { label: "Under weight", value: 20 },
    { label: "Obesed weight", value: 60 },
    { label: "Over weight", value: 50 },
  ];

  return (
    <div className="chart-container">
      <h2 className="chart-title">General Bodymass of Students</h2>
      <div className="chart">
        {data.map((item, index) => (
          <div key={index} className="bar-container">
            <div
              className="bar"
              style={{ height: `${item.value * 3}px` }} // Adjust scale here
            ></div>
            <div className="bar-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyMassChart;
