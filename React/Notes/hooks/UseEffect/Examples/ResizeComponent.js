import React, { useState, useEffect } from 'react';

function ResizeComponent() {
  // State to store the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler function to update the window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    console.log("✅ Event Listener Added");

    // Add event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup function - runs when component unmounts
    return () => {
      console.log("❌ Event Listener Removed");
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array → runs only on first render

  // JSX to display the current window width
  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  );
}

export default ResizeComponent;
