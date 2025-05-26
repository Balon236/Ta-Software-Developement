// src/components/WeightHeightChart.tsx

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

// Define the data type
interface DataPoint {
  height: number;
  weight: number;
  color: string,
  date: string
}

// Sample data
const data: DataPoint[] = [
  { height: 150, weight: 50 ,date:"22-02-06",color:"#8884d8"},
  { height: 160, weight: 55 ,date:"23-02-06",color:"#ff7f50"},
  { height: 170, weight: 65 ,date:"24-02-06",color:"#82ca9d"},
  { height: 180, weight: 70 ,date:"25-02-06",color:"#ffc658"},
  { height: 190, weight: 80 ,date:"26-02-06",color:"#889cd8"},
  { height: 180, weight: 70 ,date:"25-02-06",color:"#677ab5"},
  { height: 200, weight: 80 ,date:"26-02-06",color:"#35e4d3"}
];

const WeightHeightChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="height" label={{ value: 'Height (cm)', angle: -90, position: 'insideLeft' }} />
        <XAxis label={{ value: 'Weight (kg)', position: 'insideBottom', offset: -3 }} />
        <Tooltip />
      
        <Bar dataKey="height" barSize={50}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <LabelList dataKey="date" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeightHeightChart;
