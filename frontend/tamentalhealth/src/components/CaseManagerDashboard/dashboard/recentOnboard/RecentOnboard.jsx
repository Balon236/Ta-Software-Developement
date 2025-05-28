import React from "react";
import "./recentOnboard.css";

const onboardData = [
  {
    name: "1.Dims",
    className: "Form 5",
    view: "https://www.youtube.com/",
    profile: "studentname@info",
  },
  {
    name: "2.Flora",
    className: "Form 3",
    view: "https://www.youtube.com/",
    profile: "studentname@info",
  },
  {
    name: "3.Jackson",
    className: "Form 3",
    view: "https://www.youtube.com/",
    profile: "studentname@info",
  },
];

const RecentOnboard = () => {
  return (
    <div className="onboard-container">
      <h2 className="onboard-title">RECENT ONBOARD</h2>
      <div className="onboard-table">
        <div className="onboard-header">
          <div className="onboard-col name">Name</div>
          <div className="onboard-col class">Class</div>
          <div className="onboard-col view">View</div>
          <div className="onboard-col profile">Profile</div>
        </div>
        {onboardData.map((item, index) => (
          <div className="onboard-row" key={index}>
            <div className="onboard-col name">{item.name}</div>
            <div className="onboard-col class">{item.className}</div>
            <div className="onboard-col view">
              <a href={item.view} target="_blank" rel="noopener noreferrer">
                {item.view}
              </a>
            </div>
            <div className="onboard-col profile">{item.profile}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOnboard;
