import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
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

const weightChart = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>General Weigh/Time of Students</h2>
        <select className="year-select">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4A90E2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[10, 50]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="weight"
            stroke="#4A90E2"
            fillOpacity={1}
            fill="url(#colorWeight)"
            activeDot={{ r: 6 }}
            dot={{ fill: "#4A90E2", stroke: "#fff", strokeWidth: 2, r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default weightChart;
