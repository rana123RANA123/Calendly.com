import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// import { data } from "../profileData/ProfileData";
import { BarChart, Bar, Rectangle, ResponsiveContainer } from "recharts";

import React from "react";

export default function GraphCart() {
  const data = [
    {
      name: "Monday",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tuesday",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wednesday",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thusday",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Friday",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Saturday",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sunday",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    // <LineChart
    //   width={1130}
    //   height={310}
    //   data={data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Line
    //     type="monotone"
    //     dataKey="value"
    //     stroke="#8884d8"
    //     activeDot={{ r: 8 }}
    //   />
    // </LineChart>
    <BarChart
      width={1130}
      height={310}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="pv"
        fill="#8884d8"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
      <Bar
        dataKey="uv"
        fill="#82ca9d"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
    </BarChart>
  );
}
