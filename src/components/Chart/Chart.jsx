import React from 'react';
import './Chart.css';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart
        data={data}
        margin={{ top: 25, right: 35, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ce2d4f" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ce2d4f" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="#1d1d1d" />
        <YAxis stroke="#1d1d1d" axisLine={{ stroke: '#1d1d1d' }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip wrapperClassName="chart-tooltip" />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#ce2d4f"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
