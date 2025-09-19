import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import foodItems from "./components/FoodItems";

const App = () => {
  const [search, setSearch] = useState("");
  const  [select,SetSelect]=useState("all");
  function handle(e) {
    setSearch(e.target.value);
  }

  function Selection(category){
    SetSelect(category);
  }

  const filteredItems=foodItems.filter((item)=>
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <NavBar handle={handle} Selection ={Selection}  />
      <Hero foodItems={filteredItems} />
    </div>
  );
};

export default App;
