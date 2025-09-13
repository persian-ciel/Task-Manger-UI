import React from "react";
import Navbar from "./Navbar";
import Information from "./Information";
import Overview from "./Overview";

function MainContetn() {
  return (
    <>
      <div className="absolute top-0 left-[20%] w-[80%] h-full flex flex-col">
        <Navbar />
        <Information />
        <Overview />
      </div>
    </>
  );
}

export default MainContetn;
