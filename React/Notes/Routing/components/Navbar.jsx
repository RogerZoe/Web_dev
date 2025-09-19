import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <ul className="flex gap-2 border justify-center ">
        <li>
          <NavLink className={({isActive})=> isActive?"text-red-400":"bg-white"} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive?"text-red-400":"bg-white"} to="/About">About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=> isActive?"text-red-400":"bg-white"} to="/DashBoard">DashBoard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
