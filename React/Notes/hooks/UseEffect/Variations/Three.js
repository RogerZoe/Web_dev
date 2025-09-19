import { useEffect, useState } from 'react';

//*Runs When a Single Dependency Updates

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect: Runs when count updates
    alert('I will run every time when count is updated');
  }, [count]); // Dependency array with count

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