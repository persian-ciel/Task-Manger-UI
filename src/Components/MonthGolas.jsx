import React from "react";
import RadioButton from "./RadioButton";

function MonthGoals() {
  const title = [
    { id: 1, title: "Read 2 book" },
    { id: 2, title: "Sport every day" },
    { id: 3, title: "Read 2 book" },
    { id: 4, title: "Sport every day" },
    { id: 5, title: "Sport every day" },
    { id: 6, title: "Read 2 book" },
    { id: 7, title: "Sport every day" },
    { id: 8, title: "Read 2 book" },
    { id: 9, title: "Sport every day" },
    { id: 10, title: "Sport every day" },
    { id: 11, title: "Read 2 book" },
    { id: 12, title: "Sport every day" },
    { id: 13, title: "Read 2 book" },
    { id: 14, title: "Sport every day" },
    { id: 15, title: "Sport every day" },
  ];
  const task = title.map((name) => (
    <RadioButton key={name.id} task={name.title} />
  ));
  return (
    <>
      <div className="table bg-neutral-100 text-black ml-5 rounded-4xl w-[30%] h-[95%] pr-5 shadow-md">
        <div className="pt-4 pl-5 pb-2 text-left font-semibold text-xl 2xl:text-3xl 2xl:pl-5">
          Month Goals:
        </div>
        <div className="max-h-24 2xl:max-h-80 overflow-y-auto pr-2">{task}</div>
      </div>
    </>
  );
}

export default MonthGoals;
