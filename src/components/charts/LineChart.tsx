import React, { useEffect, useRef, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';

interface DataPoint {
  height: number;
  weight: number;
  color: string;
  date: string;
}

const data: DataPoint[] = [
  { height: 150, weight: 50, date: '22-02-06', color: '#8884d8' },
  { height: 160, weight: 55, date: '23-02-06', color: '#ff7f50' },
  { height: 170, weight: 65, date: '24-02-06', color: '#82ca9d' },
  { height: 180, weight: 70, date: '25-02-06', color: '#ffc658' },
  { height: 190, weight: 80, date: '26-02-06', color: '#889cd8' },
];

interface Props {
  selectedDate: string;
}

const WeightHeightSingleLine: React.FC<Props> = ({ selectedDate }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartDims, setChartDims] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const point = data.find((d) => d.date === selectedDate);
  if (!point) return <p>No data for date {selectedDate}</p>;

  // Effect to measure chart size
  useEffect(() => {
    if (chartRef.current) {
      const rect = chartRef.current.getBoundingClientRect();
      setChartDims({ width: rect.width, height: rect.height });
    }
  }, [chartRef]);

  const handleMouseEnter = (e: any) => {
    if (e && e.activePayload && e.activePayload[0]) {
      const cx = e.chartX;
      const cy = e.chartY;
      setPosition({ x: cx, y: cy });
    }
  };

  return (
    <div ref={chartRef} className="relative w-full h-[400px]">
        <p className='text-center'>Date: {selectedDate}</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={[{ weight: 0, height: 0 }, point]}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          onMouseMove={handleMouseEnter}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="weight"
            domain={[0, 'dataMax + 10']}
            label={{ value: 'Weight (kg)', position: 'insideBottom', offset: -5 }}
          />
          <YAxis
            type="number"
            dataKey="height"
            domain={[0, 'dataMax + 10']}
            label={{ value: 'Height (cm)', angle: -90, position: 'insideLeft' }}
          />
          <Line type="linear" dataKey="height" stroke={point.color} dot={false} />
          <ReferenceDot x={point.weight} y={point.height} r={6} fill={point.color} stroke="#333" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

      {/* Floating label outside SVG */}
      {position && (
        <div
          className="absolute bg-white p-2 border border-gray-300 rounded shadow-sm"
          style={{
            left: position.x + 20,
            top: position.y - 20,
            width: '220px',
            zIndex: 20,
          }}
        >
          <div style={{ color: '#2563EB', fontWeight: '600', fontSize: '0.875rem' }}>Malnutrition</div>
          <div style={{ fontSize: '0.75rem', color: '#4B5563' }}>
            (The student doesn't eat much or
          </div>
          <div style={{ fontSize: '0.75rem', color: '#4B5563' }}>eats an unbalanced diet)</div>
        </div>
      )}
    </div>
  );
};

export default WeightHeightSingleLine;
