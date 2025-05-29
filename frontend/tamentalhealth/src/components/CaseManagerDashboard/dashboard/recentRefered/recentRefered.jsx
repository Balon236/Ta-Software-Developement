import React from "react";
import "./recentRefered.css";

const data = [
  {
    name: "3.Jackson",
    form: "Form 5 code",
    dob: "30/05/2025",
    email: "studentname@info",
  },
  {
    name: "3.Jackson",
    form: "Form 3 code",
    dob: "30/05/2025",
    email: "studentname@info",
  },
  {
    name: "3.Jackson",
    form: "Form 3 code",
    dob: "30/05/2025",
    email: "studentname@info",
  },
];

const RecentReferred = () => {
  return (
    <div className="referred-container border-[#1E74FF26]">
      <h2 className="title">RECENT REFERED</h2>
      <div className="table">
        <div className="table-header">
          <div className="col name">Name</div>
          <div className="col dob">DOB</div>
          <div className="col view">View</div>
        </div>
        {data.map((item, index) => (
          <div className="table-row" key={index}>
            <div className="col name">
              <strong>{item.name}</strong>
              <div className="subtext">{item.form}</div>
            </div>
            <div className="col dob">{item.dob}</div>
            <div className="col view">{item.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReferred;
