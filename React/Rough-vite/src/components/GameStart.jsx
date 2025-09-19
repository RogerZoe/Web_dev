import React from "react";
import { useState } from "react";
import SelectNumber from "./SelectNumber";
import Dice from "./Dice";

const GameStart = () => {
  const [dice, SetDice] = useState(0);
  const [selected, setSelected] = useState(null);
  const [random, setRandom] = useState(1);
  const [error, setError] = useState(" ");
  const array = [1, 2, 3, 4, 5, 6];

  function handle(index) {
    setSelected((prev) => (prev == index ? null : index));
  }
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function rollDice() {
    if (!selected) {
      setError("You have not selected any number");
      return;
    }
    setError(" ");
    const num = getRandom(1, 7);
    setRandom(num);

    if (selected == random) {
      SetDice((prev) => prev + random);
    } else {
      SetDice((prev) => prev - 1);
    }
    setSelected(null);
  }
  return (
    <>
      <SelectNumber
        dice={dice}
        array={array}
        handle={handle}
        selected={selected}
        error={error}
      />
      <Dice random={random} rollDice={rollDice} />
    </>
  );
};

export default GameStart;
