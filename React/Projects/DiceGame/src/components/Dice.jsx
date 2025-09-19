import React from "react";

const Dice = ({ random, rollDice }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div onClick={rollDice}>
        <img src= {`/Images/dice_${random}.png`} alt="dice_1" />
        
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="font-bold text-2xl">Click on Dice to roll</p>
        <button className="border py-2 font-bold rounded-sm cursor-pointer">
          Reset Score
        </button>
        <button className="border py-2 font-bold text-white bg-slate-900 rounded-sm cursor-pointer">
          Show Rules
        </button>
      </div>
    </div>
  );
};

export default Dice;
