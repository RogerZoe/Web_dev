import React, { useEffect, useState } from "react";

function DataFetcher() {
  // ✅ State to store fetched data
  const [data, setData] = useState([]);
  
  // ✅ State to show loading status
  const [loading, setLoading] = useState(true);

  // ✅ Runs only once when component mounts
  useEffect(() => {
    // Make the API call
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);        // Save the data into state
        setLoading(false);    // Set loading to false after data is fetched
      });
  }, []); // Empty dependency array → only runs on first render

  // ✅ Return JSX
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1> // Show while data is being fetched
      ) : (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li> // Display post titles
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;
