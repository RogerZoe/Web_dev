import React from "react";
import Hello from "./user"; // Assuming Hello component is in the same directory

function App() {
  let Person = [
    {
      Name: "Arif",
      age: 12,
      Village: "NDCL",
      img: "https://i.imgur.com/1bX5QH6.jpg",
    },
    {
      Name: "Shaik",
      age: 22,
      Village: "Aus",
      img: "https://i.imgur.com/1bX5QH6.jpg",
    },
  ];
  return (
    <>
      {
      Person.map((element, index) => (
        <Hello
          key={index}
          Name={element.Name}
          age={element.age}
          Village={element.Village}
          image={element.img}
        />
      ))
      }
    </>
  );
}
export default App;
