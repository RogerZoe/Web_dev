import React, { useContext } from "react";
import { num } from "../App";

const ChildC = () => {
  const value = useContext(num);
  console.log(value);
  return (
    <div className="text-white bg-green-300">
      <p>im in childC</p>
      {value}
    </div>
  );
};

export default ChildC;
