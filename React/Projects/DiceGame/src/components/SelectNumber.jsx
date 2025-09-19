import React from "react";

const SelectNumber = ({array,dice,handle,selected,error}) => {
  return (
    <main className=" flex justify-around px-1 py-10">
      <div className="font-bold">
        <p className="text-7xl">{dice}</p>
        <p className="text-xl">Total Score</p>
      </div>
      <div className="  flex flex-col items-end gap-3 h-24  ">
         <p className="text-red-600 font-bold  text-xl">{error}</p>
        <div className="flex gap-4 ">
          {array.map((index, i) => (
            <button
              className={` px-6 py-4   font-bold border-2 hover:bg-slate-900 hover:text-white transition duration-300 ease-in cursor-pointer ${selected==index? "bg-slate-900 text-white":"hover:bg-slate-900 hover:text-white"}`}
              key={i}
              onClick={()=> handle(index)}
            >
              {index}
            </button>
          ))}
        </div>
        <p className="font-bold text-xl">Select Number</p>
      </div>
    </main>
  );
};

export default SelectNumber;
