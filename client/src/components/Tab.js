import React, { useState } from "react";

const Tab = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
    console.log(index);
  };

  return (
    <div className="container w-[500px] mt-2 bg-slate-500 shadow-md m-auto">
      <div className="tab-container flex justify-around gap-1">
        <div
          className={
            toggle === 1
              ? "tabs py-2 text-blue-500 font-bold border-b-2 border-blue-500 cursor-pointer bg-slate-300 w-full text-center"
              : "tabs py-2 cursor-pointer bg-slate-300 w-full text-center border-r-2 border-slate-400 "
          }
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </div>
        <div
          className={
            toggle === 2
              ? "tabs py-2 text-blue-500 font-bold border-b-2 border-blue-500  cursor-pointer bg-slate-300 w-full text-center "
              : "tabs py-2 cursor-pointer bg-slate-300 w-full text-center border-r-2 border-slate-400 "
          }
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </div>
        <div
          className={
            toggle === 3
              ? "tabs py-2 text-blue-500 font-bold border-b-2 border-blue-500  cursor-pointer bg-slate-300 w-full text-center  "
              : "tabs py-2 cursor-pointer bg-slate-300 w-full text-center border-r-2 border-slate-400 "
          }
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </div>
        <div
          className={
            toggle === 4
              ? "tabs py-2 text-blue-500 font-bold border-b-2 border-blue-500  cursor-pointer bg-slate-300 w-full text-center "
              : "tabs py-2 cursor-pointer bg-slate-300 w-full text-center border-r-2 border-slate-400 "
          }
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </div>
      </div>
      <div className="content-container flex justify-around h-[300px]">
        <div
          className={
            toggle === 1 ? "content p-2 w-full bg-slate-400" : "hidden"
          }
          onClick={() => toggleTab(1)}
        >
          content 1
        </div>
        <div
          className={
            toggle === 2 ? "content p-2 w-full bg-slate-400" : "hidden"
          }
          onClick={() => toggleTab(2)}
        >
          content 2
        </div>
        <div
          className={
            toggle === 3 ? "content p-2 w-full bg-slate-400" : "hidden"
          }
          onClick={() => toggleTab(3)}
        >
          content 3
        </div>
        <div
          className={
            toggle === 4 ? "content p-2 w-full bg-slate-400" : "hidden"
          }
          onClick={() => toggleTab(4)}
        >
          content 4
        </div>
      </div>
    </div>
  );
};

export default Tab;
