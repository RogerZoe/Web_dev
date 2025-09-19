//! This code demonstrates how to use useRef to persist a value across renders without causing re-renders.
// App.jsx
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const val = useRef(0); // useRef variable

  useEffect(() => {
    console.log('I have re-rendered');
  });

  const handleIncrement = () => {
    setCount(count + 1);
    val.current = val.current + 1; // Update ref value
    console.log(`Value of val: ${val.current}`);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <div>Count: {count}</div>
      <div>Value of val: {val.current}</div>
    </div>
  );
}
export default App;