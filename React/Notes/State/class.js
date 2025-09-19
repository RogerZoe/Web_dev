// import React, { useState } from "react";
// class Hello extends React.Component {

//   Name="Arif"
//   age=12;
//   render() {
//     const updated=()=>{
//       let name=document.getElementById("text");
//     }
//     return (
//       <>
//         <h1 >{this.Name}</h1>
//         <h1>{this.age}</h1>
//         <input id="text"  type="text"/>
//         <button onClick={updated}>click..............................
//         </button>
//        </>
//     )
//   }
// }
// export default Hello

//! It is being converted into like this ...................
import React from "react";

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Arif",
    };
  }

  age = 12;

  render() {
    // Define an event handler to update the name in the state
    const updateName = () => {
      // Get the value from the input field
      const name = document.getElementById("text").value;
      // Update the state with the new name
      this.setState({ name });
    };

    return (
      <>
        <h2>{this.state.name}</h2>
        <h1>{this.age}</h1>
        <input id="text" type="text" />
        <button onClick={updateName}>Click</button>
      </>
    );
  }
}

export default Hello;

//*STEPS-------------------------------------------------------------------------
// Sure! Here are the key points about state in class components in React:

// 1. **Initialization**: State is initialized in the constructor of a class component using `this.state`.

// 2. **Accessing State**: State variables are accessed using `this.state`.

// 3. **Updating State**: State should be updated using the `this.setState()` method to ensure the component re-renders with the updated state.

// 4. **Rendering State**: The component re-renders whenever the state changes, and state variables are used in the `render()` method.

// 5. **Event Handlers**: Event handlers can update state based on user actions, and they should be defined as arrow functions or bound in the constructor to maintain the correct `this` context.

// 6. **Avoid Direct Modification**: Directly modifying state without using `setState` is not recommended because it does not trigger a re-render. Always use `this.setState()` for state updates.
