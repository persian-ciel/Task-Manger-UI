import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskCardPopup from "./TaskCardPopup";
import NextIcon from "../assets/right-arrow.png";
function TaskInProcess() {
  const tasks = [
    {
      id: 1,
      taskTitle: "Buy a gift",
      taskDescription: "Buy Susan a Gift",
      taskDate: "April 15, 2022",
    },
    {
      id: 2,
      taskTitle: "Plan meeting",
      taskDescription: "Schedule team synfsfedfefeeffsegaegeagaec",
      taskDate: "April 16, 2022",
    },
    {
      id: 3,
      taskTitle: "Update report",
      taskDescription: "Finalize quarterly report",
      taskDate: "April 17, 2022",
    },
    {
      id: 4,
      taskTitle: "Review code",
      taskDescription: "Check pull requests",
      taskDate: "April 18, 2022",
    },
  ];
  const [openPopupId, setOpenPopupId] = useState(null);
  const togglePopup = (id) => {
    setOpenPopupId(openPopupId === id ? null : id);
  };
  const taskCards = tasks.map((task) => (
    <TaskCard
      key={task.id}
      id={task.id}
      title={task.taskTitle}
      description={task.taskDescription}
      date={task.taskDate}
      onDotClick={togglePopup}
      onClosePopup={() => setOpenPopupId(null)}
      isPopupOpen={openPopupId === task.id}
    />
  ));
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-[15%] p-2 flex text-black justify-between items-center 2xl:rounded-4xl">
        <div className="text-left ml-2 font-semibold text-xl 2xl:text-3xl 2xl:pl-5">
          Task In Process ({tasks.length})
        </div>
        <div className="inline-flex items-center gap-2 text-right 2xl:text-2xl cursor-pointer">
          <span>Open archive</span>
          <img
            src={NextIcon}
            className="w-2.5 h-2.5 mt-0.5 2xl:w-5 2xl:h-5 2xl:mr-4 mr-2 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap mt-4">{taskCards}</div>
    </div>
  );
}
export default TaskInProcess;
