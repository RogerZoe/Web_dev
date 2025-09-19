import React from "react"; // Importing React to use JSX and React components
import ReactDOM from "react-dom/client"; // Importing ReactDOM to render React components to the DOM

// Create a root reference to the DOM element with the id "root"
let root = ReactDOM.createRoot(document.getElementById("root"));

// Define a React component using a class
class Name extends React.Component {
  // The render method is required in class components and returns the JSX to be rendered
  render() {
    return (
      <h2>Welcome to my world</h2> // The JSX to be rendered by this component
    );
  }
}

// Render the Name component into the root element
root.render(<Name />);
