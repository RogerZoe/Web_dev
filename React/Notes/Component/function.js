import React from "react"; // Importing React to use JSX and React components
import ReactDOM from "react-dom/client"; // Importing ReactDOM to render React components to the DOM

// Create a root reference to the DOM element with the id "root"
let root = ReactDOM.createRoot(document.getElementById("root"));

// Define a functional component called Hlo
function Hlo() {
  // Define a local variable Name within the component
  let Name = "Arif";

  // Return JSX to render, using the local variable Name
  return <h2>Welcome {Name}</h2>;
}

//? Render the Hlo component into the root element
root.render(<Hlo />);

//*React needs a place in the HTML to inject the generated HTML. This is typically a <div> element with an id, in this case, "root"
