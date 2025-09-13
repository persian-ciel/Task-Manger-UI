import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

function Progress() {
  const data = [
    { name: "M", hour: 10, pv: 2400, amt: 2400 },
    { name: "T", hour: 5, pv: 1398, amt: 2210 },
    { name: "W", hour: 8, pv: 9800, amt: 2290 },
    { name: "T", hour: 6, pv: 3908, amt: 2000 },
    { name: "F", hour: 7, pv: 4800, amt: 2181 },
    { name: "S", hour: 9, pv: 3800, amt: 2500 },
    { name: "S", hour: 2, pv: 4300, amt: 2100 },
  ];

  const [chartSize, setChartSize] = useState({ width: 300, height: 150 });

  useEffect(() => {
    const updateChartSize = () => {
      if (window.innerWidth >= 1536) {
        // Tailwind's 2xl breakpoint
        setChartSize({ width: 400, height: 200 });
      } else {
        setChartSize({ width: 300, height: 150 });
      }
    };

    updateChartSize(); // Set initial size
    window.addEventListener("resize", updateChartSize);
    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-neutral-800 text-white p-3 rounded-lg shadow-lg border border-gray-500">
          <p className="font-semibold text-sm">{`Day: ${label}`}</p>
          <p className="text-sm">{`Hours: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const MyChart = () => (
    <LineChart
      width={chartSize.width}
      height={chartSize.height}
      data={data}
      margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
    >
      <CartesianGrid stroke="#aaa" />
      <Line type="monotone" dataKey="hour" stroke="black" strokeWidth={2} />
      <XAxis dataKey="name" stroke="black" />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );

  return (
    <div className="flex flex-col items-center bg-transparent border-2 shadow-md border-white mx-2 sm:mx-5 rounded-4xl w-full text-black 2xl:rounded-4xl">
      <div className="pt-4 pl-5 pb-2 text-left font-semibold text-xl 2xl:text-3xl 2xl:pl-7 w-full">
        Weekly Progress
      </div>
      <div className="p-2 sm:p-4 w-full max-w-[400px] 2xl:max-w-[500px]">
        <MyChart />
      </div>
    </div>
  );
}

export default Progress;
