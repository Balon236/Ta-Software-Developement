import React from "react";
import "./StatCard.css";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <div>
          <p className="stat-title">{title}</p>
          <h2 className="stat-number">{value}</h2>
        </div>
        <div className="stat-icon">
          <img src={icon} alt={`${title} icon`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
