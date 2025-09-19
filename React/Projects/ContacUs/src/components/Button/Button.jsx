import React from "react";

const Button = (props) => {
  console.log(props.isSubmit);
  return (
    <div className="relative border font-bold  w-full text-white rounded-xl   bg-slate-900 ">
      {props.isOutline ? (
        <button className="border   cursor-pointer h-10  w-full   gap-2    flex items-center justify-center  bg-white text-slate-900">
          {props.image}
          {props.name}
        </button>
      ) : (
        <button className="cursor-pointer p-2 gap-2  w-[220px]  flex items-center justify-center ">
          {props.image}
          {props.name}
        </button>
      )}
    </div>
  );
};

export default Button;
