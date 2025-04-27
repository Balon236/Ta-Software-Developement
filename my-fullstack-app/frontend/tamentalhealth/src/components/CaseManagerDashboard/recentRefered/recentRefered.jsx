import React, { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "Jackson",
    form: "Form 5 code",
    dob: "30/05/2025",
    email: "studentname@info",
  },
  {
    id: 2,
    name: "Jackson",
    form: "Form 3 code",
    dob: "30/05/2025",
    email: "studentname@info",
  },
  {
    id: 3,
    name: "Jackson",
    form: "Form 3 code",
    dob: "30/05/2025",
    email: "studentname@info",
  },
];

const RecentReferred = () => {
  const [data] = useState(initialData);

  return (
    <div className="w-full bg-[#e6f0ff] rounded-lg overflow-hidden">
      <h2 className="text-base font-semibold m-0 p-3 bg-[#b1ceff] text-[#1e74ff]">
        RECENT REFERED
      </h2>
      <div className="w-full">
        <div className="flex bg-[#b1ceff] font-semibold p-2.5 text-[#1e74ff]">
          <div className="flex-[2] pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
            Name
          </div>
          <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap text-center">
            DOB
          </div>
          <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap text-center md:block hidden">
            View
          </div>
        </div>

        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex border-b border-[#d6e4ff] p-2.5 last:border-b-0"
          >
            <div className="flex-[2] pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap flex flex-col">
              <strong>{`${index + 1}.Jackson`}</strong>
              <div className="text-xs text-gray-500 mt-0.5">{item.form}</div>
            </div>
            <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap text-center">
              {item.dob}
            </div>
            <div className="flex-1 pr-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap text-center md:block hidden">
              {item.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReferred;
