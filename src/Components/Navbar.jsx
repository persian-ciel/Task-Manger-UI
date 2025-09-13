import React from "react";
import SearchIcon from "../assets/search-interface-symbol.png";
import NotifesIcon from "../assets/notification.png";

function Navbar() {
  return (
    <>
      <div className="w-full h-[15%] p-2 flex pl-4 ">
        <div className="flex-1 absolute ml-5 text-left mt-2 w-1/2 flex justify-start items-center">
          <p className="font-semibold text-black text-3xl 2xl:text-5xl 2xl:pt-6">Hi Ciel,</p>
        </div>
        <div className="flex-1  flex justify-end items-center w-11/12 ml-36">
          <button className="px-7 py-2 text-white rounded-4xl bg-neutral-900 cursor-pointer ">
            + Create
          </button>
          <button className="rounded-4xl px-3 py-3 bg-white cursor-pointer ml-4">
            <img src={SearchIcon} className="w-5 h-5"></img>
          </button>
          <button className="rounded-4xl px-3 py-3 bg-white cursor-pointer ml-4">
            <img src={NotifesIcon} className="w-5 h-5"></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
