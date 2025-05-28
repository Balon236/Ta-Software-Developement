import React from "react";

const BodyMassChart = () => {
  const data = [
    { label: "Normal", value: 40 },
    { label: "Under weight", value: 20 },
    { label: "Obesed weight", value: 60 },
    { label: "Over weight", value: 50 },
  ];

  return (
    <div className="bg-[#f2f2f2] rounded-lg p-5 w-full">
      <h2 className="text-lg font-semibold text-gray-800 m-0 mb-5 text-center">
        General Bodymass of Students
      </h2>
      <div className="flex justify-around items-end h-[200px] px-2.5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[60px] md:w-[60px] sm:w-[40px]"
          >
            <div
              className="w-5 md:w-5 sm:w-4 bg-[#1e74ff] rounded-t-lg transition-height duration-300"
              style={{ height: `${item.value * 2}px` }}
            ></div>
            <div className="mt-2.5 text-xs md:text-xs sm:text-[10px] text-gray-600 text-center max-w-full break-words">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyMassChart;
