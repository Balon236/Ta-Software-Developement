import React, { useState } from "react";

const initialConsultants = [
  {
    id: 1,
    name: "Dims",
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    name: "Flora",
    link: "https://www.youtube.com/",
  },
  {
    id: 3,
    name: "Jackson",
    link: "https://www.youtube.com/",
  },
];

const TopConsultants = () => {
  const [consultants] = useState(initialConsultants);

  return (
    <div className="w-full bg-[#e6f0ff] p-10 rounded-lg overflow-hidden">
      <h1 className="text-base font-semibold m-0 p-3 bg-[#b1ceff] text-[#1e74ff] text-left">
        TOP CONSULTANTS
      </h1>
      <div className="w-full">
        <div className="flex bg-[#b1ceff] font-semibold p-2.5 text-[#1e74ff]">
          <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
            Name
          </div>
          <div className="flex-[2] pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap md:block hidden">
            View
          </div>
        </div>
        {consultants.map((consultant, index) => (
          <div
            key={consultant.id}
            className="flex border-b border-[#d6e4ff] p-2.5 last:border-b-0"
          >
            <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
              {`${index + 1}.${consultant.name}`}
            </div>
            <div className="flex-[2] pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap md:block hidden">
              <a
                href={consultant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e74ff] no-underline block overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {consultant.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopConsultants;
