//! This code demonstrates how to use useRef to access and manipulate DOM elements directly.
// App.jsx
import { useRef } from 'react';

function App() {
  const buttonRef = useRef(null); // Create ref for the first button

  const changeColor = () => {
    buttonRef.current.style.backgroundColor = 'red'; // Change background color
  };

  return (
    <div>
      <button ref={buttonRef}>Increment</button>
      <br />
      <button onClick={changeColor}>Change Color of First Button</button>
    </div>
  );
}
export default App;