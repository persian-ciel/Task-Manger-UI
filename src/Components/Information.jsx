import React from "react";
import OveralInforamation from "./OveralInformation";
import Progress from "./Progress";
import MothProgress from "./MothProgress";

function Information() {
  return (
    <>
      <div className="w-full h-[50%] 2xl:h-[45%] p-2 flex">
        <OveralInforamation />
        <Progress />
        <MothProgress />
      </div>
    </>
  );
}

export default Information;
