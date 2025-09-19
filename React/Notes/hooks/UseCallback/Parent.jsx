// !useCallback is used to memoize the function so that it does not get recreated on every render
// App.jsx

import { useCallback, useState } from "react";
import ChildComponent from "./Child";

function App() {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };

  const handleclick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // *useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
      <ChildComponent buttonName="Click Me" /> 
      {/* //==> Here I send the static value so it wont re-render ,  When React.memo is not used, the child component always re-renders whenever the parent re-renders — even if the props haven't changed. */}
      {/* The ChildComponent will re-render every time the parent component re-renders */}
      {/* This is because the buttonName prop is not memoized, so it changes on every render */}
      {/* If you want to prevent the ChildComponent from re-rendering, you can use React.memo to memoize it  */}

      <ChildComponent buttonName="Click Me" handleClick={handleclick} />
      {/* // Here even if we use react.memo ,still the ChildComponent will re-render every time the parent component re-renders. */}
      {/* // This is because the handleClick function is created on every render, so it changes on every render */}
      {/* //function reference is not stable, so it will cause the child component to re-render every time the parent component re-renders       */}

      <ChildComponent buttonName="Click Me" handleClick={handleclick} />
      {/* // To prevent this, we can use useCallback to memoize the handleClick function */}
      {/* // This will ensure that the handleClick function reference is stable, and the ChildComponent will not re-render unnecessarily */}
    </div>
  );
}
export default App;
