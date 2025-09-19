// export default function Hlo() {
//   let counter = 0;
//   return (
//     <>
//       <h1>counter :{counter}</h1>
//       <button onClick={update}>click me</button>
//     </>
//   );
//   function update() {
//     ++counter;
// console.log(counter);
// ! It doesn't Render...........[update the counter]
//   }
// }
// !Here's Why Your Code Doesn't Work:

//*==> ? React Doesn't Track Non-State Variables: The counter variable is not managed by React's state mechanism. Thus, when it changes, React does not re-render the component.
//?==> ? Direct Variable Modification: Updating a variable like counter does not trigger React's rendering lifecycle, which is essential for updating the UI.


//^ In React, when you want to trigger a re-render of a component upon state changes, you need to use the useState hook
//^ The useState hook allows you to create state variables in a functional component, which React tracks, ensuring the component re-renders whenever the state changes.

import React, { useState } from "react"; //1. IMPORT the useState

export default function Hlo() {
  // let counter = 0;
  let [counter, newCounter] = useState(0); //*The [ and ] syntax here is called array destructuring and it lets you read values from an array. The array returned by useState always has exactly two items.
  //^INITIAL VALUE, FUNCTION TO UPDATE THE VALUE......
  return (
    <>
      <h1>counter :{counter}</h1>
      <button
        onClick={() => {
          newCounter(++counter);
        }}
      >
        click me
      </button>
    </>
  );
}
