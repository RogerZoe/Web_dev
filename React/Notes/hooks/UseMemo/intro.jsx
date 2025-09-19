// App.jsx
import { useState, useMemo } from 'react';
//* This code demonstrates how to use useMemo to optimize performance by memoizing expensive calculations.
//! It prevents unnecessary recalculations when the input value hasn't changed, thus improving performance.


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const expensiveTask = (num) => {
    console.log('Inside Expensive Task');
    for (let i = 0; i <= 1000000000; i++) {} //? this loop simulates a time-consuming task
    return num * 2;
  };

  const doubleValue = useMemo(() => {
    return expensiveTask(input); //
  }, [input]); // Only recompute if input changes

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <div>Count: {count}</div>
      <div>Double Value: {doubleValue}</div>
    </div>
  );
}
export default App;