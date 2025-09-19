import React from "react";
import Hero from "./Hero";

const NavBar = ({handle}) => {
  
  return (
    <div>
      <nav className="  flex  justify-between p-2  h-32 ">
        <div>
          <h1>Foody Zone</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button onClick={Selection} className="border p-1 cursor-pointer hover:bg-red-700 ">All</button>
          <button className="border p-1 cursor-pointer hover:bg-red-700 ">BreakFast</button>
          <button className="border p-1 cursor-pointer hover:bg-red-700 ">Lunch</button>
          <button className="border p-1 cursor-pointer hover:bg-red-700 ">Dinner</button>
        </div>

        <div>
          <input  onChange={handle} type="text" placeholder="Search Food" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
