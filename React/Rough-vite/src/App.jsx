import React from "react";

import "./App.css";
import Entry from "./components/Entry";
import { useState } from "react";
import GameStart from "./components/GameStart";

const App = () => {
  function handle() {
    setBool((prev) => !prev);
  }
  const [bool, setBool] = useState(true);
  return <div>{bool ? <GameStart  /> : <Entry bool={handle}/>}</div>;
};

export default App;
