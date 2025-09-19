import { useEffect, useState } from 'react';

//* Runs When Multiple Dependencies Update

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    // Side effect: Runs when count or total updates
    alert('I will run every time when count or total is updated');
  }, [count, total]); // Dependency array with count and total

  const handleClickCount = () => {
    setCount(count + 1);
  };

  const handleClickTotal = () => {
    setTotal(total + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClickCount}>Update Count</button>
      <p>Total: {total}</p>
      <button onClick={handleClickTotal}>Update Total</button>
    </div>
  );
}