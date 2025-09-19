//UseState
//UseEffect
//UseMemo
//UseCallback
//UseRef

useEffect(() => {
  // 1️⃣ First: This is the effect's main logic.
  // It runs once when the component mounts (since dependency array is empty).

  console.log("Component Mounted");

  // 2️⃣ Return: This is the cleanup function.
  return () => {
    // This runs only when the component is about to unmount.
    console.log("Component Will Unmount (Cleanup)");
  };
}, []); // 3️⃣ Empty Dependency Array

// 3️⃣ Dependency Array ( [] ):
// - Because it's empty, the effect runs only once after the initial render (mount).
// - The cleanup function runs only when the component is removed (unmounted).
