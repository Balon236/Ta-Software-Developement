import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", weight: 40 },
  { name: "Feb", weight: 46 },
  { name: "Mar", weight: 42 },
  { name: "Apr", weight: 50 },
  { name: "May", weight: 48 },
  { name: "Jun", weight: 38 },
  { name: "Jul", weight: 45 },
  { name: "Aug", weight: 30 },
  { name: "Sep", weight: 44 },
  { name: "Oct", weight: 46 },
  { name: "Nov", weight: 37 },
  { name: "Dec", weight: 42 },
];

const WeightChart = ({ selectedYear, setSelectedYear }) => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="flex justify-between items-center mb-5 md:flex-row flex-col md:items-center items-start md:gap-0 gap-2.5">
        <h2 className="text-lg font-semibold text-gray-800 m-0">
          General Weigh/Time of Students
        </h2>
        <select
          className="px-3 py-2 border border-gray-200 rounded bg-white text-sm text-gray-600 cursor-pointer outline-none hover:border-[#1e74ff] focus:border-[#1e74ff] focus:shadow-[0_0_0_2px_rgba(30,116,255,0.2)]"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="This Year">This Year</option>
          <option value="Last Year">Last Year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E74FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1E74FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis domain={[10, 50]} axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => [`${value}`, "Weight"]} />
          <Area
            type="monotone"
            dataKey="weight"
            stroke="#1E74FF"
            fillOpacity={1}
            fill="url(#colorWeight)"
            activeDot={{
              r: 8,
              fill: "#1E74FF",
              stroke: "#fff",
              strokeWidth: 2,
            }}
            dot={{ fill: "#1E74FF", stroke: "#fff", strokeWidth: 2, r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;
