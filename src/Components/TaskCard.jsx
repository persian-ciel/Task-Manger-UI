import React from "react";
import DotIcon from "../assets/more.png";
import TaskCardPopup from "./TaskCardPopup";

function TaskCard({
  id,
  title,
  description,
  date,
  onDotClick,
  isPopupOpen,
  onClosePopup,
}) {
  return (
    <div className="relative w-40 p-4 font-arial ml-5 2xl:w-60 bg-gray-100 rounded-4xl shadow-md flex flex-col h-34">
      <div className="flex justify-between items-center">
        <h3 className="m-0 text-left text-base text-black font-bold hover:underline truncate">
          {title}
        </h3>
        <div
          className="text-right text-lg font-bold cursor-pointer text-black"
          onClick={() => onDotClick(id)}
        >
          <img src={DotIcon} alt="" className="w-3 h-3" />
        </div>
      </div>

      <p className="mt-2 text-gray-600 text-xs text-left max-h-8 overflow-y-auto overflow-x-hidden">
        {description}
      </p>
      <div className="mt-auto text-gray-500 text-xs text-left">{date}</div>

      <div className="absolute bottom-0 right-0 p-2.5 bg-neutral-800 rounded-tl-xl rounded-br-4xl flex justify-center items-center transition-colors group-hover:bg-black cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="15"
          width="15"
          className="transition-transform group-hover:translate-x-[3px]"
        >
          <path
            fill="#fff"
            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
          ></path>
        </svg>
      </div>

      {/* Popup inside this card */}
      {isPopupOpen && (
        <div
          className="absolute -top-16 right-0 z-20 transition-all duration-300 ease-out"
          onMouseEnter={(e) => e.stopPropagation()} // keep open while hovering
          onMouseLeave={() => onClosePopup()} // close when leaving
        >
          <TaskCardPopup />
        </div>
      )}
    </div>
  );
}

export default TaskCard;
