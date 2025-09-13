import React from "react";
import RadioIcon from "../assets/radio.png";
import ProgressIcon from "../assets/check.png";
import DoneIcon from "../assets/check-mark.png";
import InformationTaskCard from "./InformationTaskCard";

function OveralInforamation() {
  const cards = [
    { id: 1, icon: RadioIcon, text: 28, info: "Projects" },
    { id: 2, icon: ProgressIcon, text: 14, info: "In Progress" },
    { id: 3, icon: DoneIcon, text: 11, info: "Completed" },
  ];

  const title = cards.map((name) => (
    <InformationTaskCard
      key={name.id}
      src={name.icon}
      text={name.text}
      info={name.info}
      
    />
  ));

  return (
    <>
      <div className="table bg-neutral-800 ml-5 rounded-4xl w-full shadow-md 2xl:rounded-4xl">
        <div className="pt-4 pl-5 pb-2 text-left font-semibold text-xl 2xl:text-3xl 2xl:pl-7 ">
          Overall Information
        </div>
        <div className="pl-5 flex items-center 2xl:pl-7 ">
          <p className="flex-1 pr-4 flex items-center 2xl:mt-2">
            <span className="text-4xl font-bold mr-2 2xl:text-6xl">43</span>
            <span className="text-xs text-left 2xl:text-xl">Tasks done for all time</span>
          </p>
          <div className="w-px h-12 bg-gray-500"></div> 
          <p className="flex-1 pl-4 flex items-center 2xl:mt-5">
            <span className="text-4xl font-bold mr-2 2xl:text-6xl ">2</span>
            <span className="text-xs text-left 2xl:text-xl">Projects are stopped</span>
          </p>
          
        </div>
        <div className="flex mt-3 mx-2 py-2 gap-2  2xl:mx-5 ">{title}</div>
      </div>
    </>
  );
}

export default OveralInforamation;
