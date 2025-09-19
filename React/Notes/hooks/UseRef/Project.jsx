
import { useState, useRef } from 'react';
// Use useRef() when you need to keep a value without causing re-renders and persist it across renders 
function App() {
  const [time, setTime] = useState(0); // State for elapsed time
  const timerRef = useRef(null); // Ref to store setInterval ID
  
  //* if you use a normal variable, it will reset on every render, so we use useRef to persist the interval ID 

  const startTimer = () => {
    timerRef.current = setInterval(() => { //!don't use normal variable, useRef to persist the interval ID
      setTime((prevTime) => prevTime + 1); // Increment time every second
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current); // Stop the interval
    timerRef.current = null; // Reset ref to initial state
  };

  const resetTimer = () => {
    stopTimer(); // Stop the timer
    setTime(0); // Reset time to 0
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Time: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
export default App;
