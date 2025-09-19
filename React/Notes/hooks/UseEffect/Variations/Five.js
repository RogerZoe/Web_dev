import { useEffect, useState } from 'react';

// *Using a Cleanup Function

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect: Runs when count updates
    alert('Count is updated');

    // Cleanup function: Runs when component unmounts or count changes
    return () => {
      alert('Count is unmounted from UI');
    };
  }, [count]); // Dependency array with count

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Update Count</button>
    </div>
  );
}