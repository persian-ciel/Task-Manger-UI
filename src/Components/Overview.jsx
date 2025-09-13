import React from "react";
import MonthGoals from "./MonthGolas";
import TaskInProcess from "./TaskInProcess";

function Overview() {
  return (
    <>
      <div className="w-full h-[40%] 2xl:h-[55%] p-2 flex">
        <MonthGoals />
        <TaskInProcess />
      </div>
    </>
  );
}

export default Overview;
