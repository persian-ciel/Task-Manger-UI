import React from "react";
import PinIcon from "../assets/pin.png";
import EditIcon from "../assets/edit.png";
import DeleteIcon from "../assets/bin.png";

function TaskCardPopup() {
  return (
    <>
      <div className="w-24 rounded-lg p-2 bg-neutral-800 text-white text-xs">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="w-20 text-left">Pin Note</span>
          <img
            src={PinIcon}
            className="w-2.5 h-2.5 mt-0.5 2xl:w-5 2xl:h-5 2xl:mr-4 mr-2 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer py-2">
          <span className="w-20 text-left">Edit</span>
          <img
            src={EditIcon}
            className="w-2.5 h-2.5 mt-0.5 2xl:w-5 2xl:h-5 2xl:mr-4 mr-2 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="w-20 text-left">Delete</span>
          <img
            src={DeleteIcon}
            className="w-2.5 h-2.5 mt-0.5 2xl:w-5 2xl:h-5 2xl:mr-4 mr-2 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
export default TaskCardPopup;
