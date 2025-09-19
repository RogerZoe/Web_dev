import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);

  function handle() {
    setTodos([...todos, { text: data, id: Date.now() }]);
    setData("");
  }
  function print(e) {
    setData(e.target.value);
  }

  function Edit(id) {
    const newTodo = prompt("Enter the new Todo List");
    if (newTodo) {
      const update = todos.map((todo) =>
        todo.id == id ? { ...todo, text: newTodo } : todo
      );
      setTodos(update);
    }
  }

  function Delete(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }
  return (
    <div className="flex justify-center items-center min-h-screen gap-2 flex-col">
      <div>
        <input
          className="border  h-[40px]"
          type="text"
          onChange={print}
          value={data}
          placeholder="Enter the Todo"
        />
        <button className="border p-2 cursor-pointer" onClick={handle}>
          Submit
        </button>
      </div>

      {todos.length > 0 && (
        <div className="todo flex   mt-14 h-[40px] w-1/2 flex-col gap-4 ">
          {todos.map((todo) => (
            // console.log(todo)
            <div
              key={todo.id}
              className="flex   items-center justify-around border w-full bg-slate-200 rounded  font-bold"
            >
              <p className="text-slate-800">{todo.text}</p>
              <div className="flex gap-6 ">
                <button
                  className="text-green-400 cursor-pointer"
                  onClick={() => {
                    Edit(todo.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-400 cursor-pointer"
                  onClick={() => {
                    Delete(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
