import React from "react";
function SidebarTitle(props) {
  return (
    <>
      <li className="text-black hover:text-gray-200 hover:bg-neutral-700 cursor-pointer p-2 transition-colors rounded-4xl pl-4">
       <img
        src={props.src} 
        alt={props.text} 
        className="inline-block w-6 h-6 mr-3 2xl:w-10 2xl:h-10 2xl:mr-5" 
      /> 
        {props.text}
      </li>
    </>
  );
}

export default SidebarTitle;
