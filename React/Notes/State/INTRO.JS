import React from "react";
import ReactDOM from "react-dom/client";
//? ==> NORMAL WE USE REACTDOM.RENDER FOR RENDERING BUT IN THIS CODE ONLY ONCE  JSX RENDERING WHEN PAGE IS LOADED AND WE ARE NOT CALLING IT AGAIN -SO EVEN THOUGH THE VALUE OF COUNTER IS UPDATING ,ITS NOT GETTING DISPLAYED ON THE UI.\
// import React from "react";
// import ReactDOM from "react-dom";
// let root = ReactDOM.createRoot(document.getElementById("root"));
// let counter = 0;
// const handleClick = () => {
//   counter++;
//   console.log("counter", counter);
// };
// const content = (
//   <div>
//     <button onClick={handleClick}>Increment counter</button>
//     <div>Counter value is {counter}</div>
//   </div>
// );
// root.render(content);

//& AFTER FIXING IT...

//! ==> UPDATING THE COUNTER WITHOUT USING STATES ...
let root = ReactDOM.createRoot(document.getElementById("root"));
let counter = 0;
function handle() {
  counter++; // Increment counter
  repeat(); // Re-render the component manually
}
function repeat() {
  // Manually creating the JSX structure
  let ans = (
    <>
      <button onClick={handle}>Enter to Increment</button>
      <p>{counter}</p> {/* Display the updated counter */}
    </>
  );
  root.render(ans); // Manually re-render the component
}
// Initial render
repeat();

//* This approach manually forces re-renders but does not use React's declarative approach. It’s more similar to how rendering worked in traditional DOM manipulation frameworks.
//* This is not the ideal way to manage state in React, but it works if you don't want to use React state or hooks.

//^SO WE USE STATES..
