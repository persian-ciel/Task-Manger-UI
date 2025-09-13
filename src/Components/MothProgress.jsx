import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";

function MothProgress() {
  const data = [
    { name: "Sport", value: 40, color: "#000000" }, // black
    { name: "Study", value: 50, color: "#6b7280" }, // gray-500
    { name: "Project", value: 30, color: "#d1d5db" }, // gray-300
  ];

  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  const [chartSize, setChartSize] = useState({ width: 130, height: 130 });

  useEffect(() => {
    const updateChartSize = () => {
      if (window.innerWidth >= 1536) { // Tailwind's 2xl breakpoint
        setChartSize({ width: 220, height: 220 });
      } else {
        setChartSize({ width: 130, height: 130 });
      }
    };

    updateChartSize(); // Set initial size
    window.addEventListener("resize", updateChartSize);
    return () => window.removeEventListener("resize", updateChartSize);
  }, []);

  return (
    <>
      <div className="table items-center text-center text-black bg-neutral-50 rounded-4xl w-full shadow-md ">
        <div className="pt-4 pl-5 pb-2 text-left font-semibold text-xl 2xl:text-3xl 2xl:pl-7 w-full">
          Month Progress
        </div>
        <div className="pl-5 flex flex-col items-start">
          <p className="flex items-center space-x-2 2xl:mt-2">
            <span className="text-xl font-bold 2xl:text-2xl">+20%</span>
            <span className="text-xs text-left text-gray-600 2xl:text-xl ">
              Completed in last month
            </span>
          </p>

          <div className="flex items-center space-x-6 mx-auto">

            <div className="flex flex-col space-y-2 text-sm text-gray-700">
              {data.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>


            <div className="relative w-32 h-32 flex items-center justify-center mx-auto 2xl:w-52 2xl:h-52 2xl:mt-5">
              <PieChart width={chartSize.width} height={chartSize.height}>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={chartSize.width * 0.3}
                outerRadius={chartSize.width * 0.4}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    cornerRadius={10}
                  />
                ))}
              </Pie>
            </PieChart>
              
              <div className="absolute text-center">
                <p className="text-lg font-bold">{total}%</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MothProgress;
