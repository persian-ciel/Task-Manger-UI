import React from "react";

function InformationTaskCard(props) {
  return (
    <>
      <div className="rounded-4xl text-center bg-neutral-300 text-black mx-auto w-1/3 h-full p-3 2xl:rounded-4xl">
        <img src={props.src} alt={props.text} className="w-7 h-7 mx-auto mt-1 2xl:w-12 2xl:h-12 2xl:mt-3"/>
        <p className="text-2xl font-bold 2xl:mt-2 2xl:text-4xl">{props.text}</p>
        <p className="text-xs 2xl:text-lg 2xl:mt-2">{props.info}</p>
      </div>
    </>
  );
}

export default InformationTaskCard;
