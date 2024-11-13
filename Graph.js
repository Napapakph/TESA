//import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  Bar,
  Line,
  ResponsiveContainer,
} from "recharts";

const ChartShow = () => {
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

  return (
    <>
      <div className="LineChart" style={{ width: '100%', height: 300, marginBottom: 20 }}>
          <ResponsiveContainer width="100%" height="100%">
              <LineChart
                  data={data}
                  margin={{
                      top: 20,
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
                  <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
          </ResponsiveContainer>
      </div>

      <div className="ComposedChart" style={{ width: '100%', height: 400, marginBottom: 20 }}>
          <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                  data={data}
                  margin={{
                      top: 20,
                      right: 80,
                      bottom: 20,
                      left: 20,
                  }}
              >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis
                      dataKey="name"
                      label={{
                          value: "Pages",
                          position: "insideBottomRight",
                          offset: 0,
                      }}
                      scale="band"
                  />
                  <YAxis
                      label={{ value: "Index", angle: -90, position: "insideLeft" }}
                  />
                  <Tooltip />
                  <Legend />
                  <Area
                      type="monotone"
                      dataKey="amt"
                      fill="#8884d8"
                      stroke="#8884d8"
                  />
                  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
          </ResponsiveContainer>
      </div>

      <div className="PieChart" style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                  <Pie
                      data={data01}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                  />
                  <Pie
                      data={data02}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      fill="#82ca9d"
                      label
                  />
              </PieChart>
          </ResponsiveContainer>
      </div>
  </>

  );
};

export default ChartShow;
