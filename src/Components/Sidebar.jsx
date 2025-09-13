import React from "react";
import SidebarTitle from "./SidebarTitle";
import SettingIcon from "../assets/setting.png";
import TaskIcon from "../assets/checklist.png";
import DashboardIcon from "../assets/dashboard.png";

function Sidebar() {
  const title = [
    { id: 1, text: "Dashboard", icon: DashboardIcon},
    { id: 2, text: "My Task", icon:TaskIcon },
    { id: 3, text: "Setting", icon:  SettingIcon},
  ];
  const texts = title.map((name) => (
    <SidebarTitle key={name.id} src={name.icon} text={name.text} />
  ));
  return (
    <>
      <div className="absolute top-0 left-0 w-[20%] h-[95%] bg-white p-4 rounded-4xl m-3">
        <h2 className="text-xl text-black mt-2 font-bold mb-6 text-left ml-5 2xl:text-3xl">
          Task Manager
        </h2>
        <ul className="space-y-4 flex-1 list-none p-0 m-0 text-left 2xl:text-2xl">
          {texts}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
