import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState("Loading...");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        setUser("Error fetching user");
        console.log("❌ API Error:", error.message);
      }
    }

    fetchUser(); // 👈 Call it when component mounts
  }, []); // 👈 Empty dependency array: runs only once (on mount)

  function ShowUser() {
    if (users.length > 0) {
      const random = Math.floor(Math.random() * users.length);
      setUser(users[random].login);
    } else {
      setUser("No users");
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Github User Info</h1>
      <p className="text-lg">
        Name of the USER is:{" "}
        <span className="text-blue-600 font-semibold">{user}</span>
      </p>
      <button className="border p-2" onClick={ShowUser}>
        click me
      </button>
    </div>
  );
};

export default App;
