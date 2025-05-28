import React from "react";
import "./topConsultants.css";

const TopConsultants = () => {
  const consultants = [
    { name: "Dims", link: "https://www.youtube.com/" },
    { name: "Flora", link: "https://www.youtube.com/" },
    { name: "Jackson", link: "https://www.youtube.com/" },
  ];

  return (
    <div className="container border-[#1E74FF26]">
      <h1>Top Consultants</h1>
      <div className="header-row">
        <div className="header-cell">Name</div>
        <div className="header-cell">View</div>
      </div>
      {consultants.map((consultant, index) => (
        <div className="data-row" key={index}>
          <div className="data-cell">{`${index + 1}. ${consultant.name}`}</div>
          <div className="data-cell">
            <a href={consultant.link} target="_blank" rel="noopener noreferrer">
              {consultant.link}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopConsultants;
