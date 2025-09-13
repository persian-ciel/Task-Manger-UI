import React from "react";

function RadioButton(props) {
  return (
    <>
      <div className="flex items-center space-x-3 pl-5 p-1">
        <label className="group flex items-center cursor-pointer">
          <input className="hidden peer" type="checkbox" />

          <span className="relative w-5 h-5 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-md shadow-md transition-all duration-500 peer-checked:border-neutral-500 peer-checked:bg-neutral-800 peer-hover:scale-105">
            <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-0 peer-checked:opacity-100 rounded-md transition-all duration-500 peer-checked:animate-pulse"></span>

            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="hidden w-5 h-5 text-white peer-checked:block transition-transform duration-500 transform scale-50 peer-checked:scale-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>

          <span className="ml-3 text-neutral-700 group-hover:text-neutral-500  transition-colors duration-300">
            {props.task}
          </span>
        </label>
      </div>
    </>
  );
}

export default RadioButton;
