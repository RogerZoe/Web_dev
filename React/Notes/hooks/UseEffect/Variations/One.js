import { useEffect, useState } from 'react';
//! Variation 1: Runs on Every Render
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect: Runs on every render
    alert('I will run on each render');
  }); // No dependency array

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}