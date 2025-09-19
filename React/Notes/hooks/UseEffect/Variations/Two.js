import { useEffect, useState } from "react";
//!Runs Only on First Render
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect: Runs only on first render
    alert("I will run on only first render");
  }, []); // Empty dependency array

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
