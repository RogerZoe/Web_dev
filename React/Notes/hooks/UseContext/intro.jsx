import React, { createContext, useContext } from "react";
import ChildA from "./components/ChildA";

//context

export const num = createContext();
const App = () => {
  return (
    <num.Provider value={"sully"}>
      <div>
        <ChildA />
      </div>
    </num.Provider>
  );
};

export default App;