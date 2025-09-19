import React from "react"; // Importing React to use JSX
import ReactDOM from "react-dom/client"; // Importing ReactDOM to render React components to the DOM

// Create a root reference to the DOM element with the id "root"
let root = ReactDOM.createRoot(document.getElementById("root"));

// Render a JSX element directly into the root
// Commented out the previous single element example
const ele = <h1>Hello</h1>;
// root.render(ele);

// Rendering a JSX element (unordered list) directly into the root
root.render(
  <ul>
    <li className="hello">Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>{ele}</li>
  </ul>
);

//Babel convert it into JSX to Javascript...........
// *JSX is a syntax extension that produces JavaScript powered HTML elements. It can be assigned to JavaScript variables and can be returned from function calls
function App() {
  const myElement = <h1>Hello World</h1>;
  return myElement;
}
