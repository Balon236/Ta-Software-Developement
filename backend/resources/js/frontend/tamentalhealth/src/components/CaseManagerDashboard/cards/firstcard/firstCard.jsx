import React from "react";
import "./firstCard.css";

const firstCard = ({ title, value, icon }) => {
  return (
    <div className="first-card">
      <div className="first-content">
        <div>
          <p className="first-title">{title}</p>
          <h2 className="first-number">{value}</h2>
        </div>
        <div className="first-icon">
          <img src={icon} alt={`${title} icon`} />
        </div>
      </div>
    </div>
  );
};

export default firstCard;
