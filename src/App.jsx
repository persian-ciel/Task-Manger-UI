import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";

import MainContetn from "./Components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen bg-[url('./assets/download.jpg')] bg-cover bg-center pt-10">
        <div className="relative w-11/12 h-11/12 mx-auto backdrop-blur-sm rounded-4xl border border-white/30 shadow-xl ">
          <Sidebar />
          <MainContetn />
        </div>
      </div>
    </>
  );
}

export default App;
