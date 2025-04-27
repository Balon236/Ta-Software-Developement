import React, { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "Dims",
    className: "Form 5",
    view: "https://www.youtube.com/",
    profile: "studentname@info",
  },
  {
    id: 2,
    name: "Flora",
    className: "Form 3",
    view: "https://www.youtube.com/",
    profile: "studentname@info",
  },
  {
    id: 3,
    name: "Jackson",
    className: "Form 3",
    view: "https://www.youtube.com/",
    profile: "studentname@info",
  },
];

const RecentOnboard = () => {
  const [onboardData] = useState(initialData);

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <h2 className="text-base font-semibold m-0 p-3 bg-[#e6f0ff] text-[#1e74ff]">
        RECENT ONBOARD
      </h2>
      <div className="w-full">
        <div className="flex bg-[#e6f0ff] font-semibold p-2.5 text-[#1e74ff]">
          <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[60px]">
            Name
          </div>
          <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[60px]">
            Class
          </div>
          <div className="flex-[1.5] pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[100px] md:block hidden">
            View
          </div>
          <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[80px] md:block hidden">
            Profile
          </div>
        </div>

        {onboardData.map((item) => (
          <div
            key={item.id}
            className="flex border-b border-gray-200 p-2.5 last:border-b-0"
          >
            <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[60px]">
              {item.name}
            </div>
            <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[60px]">
              {item.className}
            </div>
            <div className="flex-[1.5] pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[100px] md:block hidden">
              <a
                href={item.view}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e74ff] no-underline block overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {item.view}
              </a>
            </div>
            <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap min-w-[80px] md:block hidden">
              {item.profile}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOnboard;
