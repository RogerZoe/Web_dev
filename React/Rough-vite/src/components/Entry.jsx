import React from "react";

import { useState } from "react";

const Entry = ({bool}) => {
    console.log(bool)
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <img className="w-3/4" src="/Dice.png" alt="Image" />
      </div>
      <div className="flex flex-col items-end gap-4 ">
        <h1 className="text-7xl font-bold ">DICE GAME</h1>
        <button onClick={bool} className="border px-10 py-3 bg-slate-900 text-white text-xl cursor-pointer hover:bg-slate-100 hover:text-black font-bold transition ease-in duration-300 rounded-sm"> 
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Entry;
