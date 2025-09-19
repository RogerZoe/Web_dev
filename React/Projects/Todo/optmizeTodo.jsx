import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function handleAdd() {
    const trimmed = data.trim();
    if (!trimmed) return;
    setTodos([...todos, { text: trimmed, id: Date.now() }]);
    setData("");
  }

  function handleEdit(id, text) {
    setEditId(id);
    setEditText(text);
  }

  function handleSave(id) {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editText.trim() } : todo
    );
    setTodos(updated);
    setEditId(null);
    setEditText("");
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="flex justify-center items-center min-h-screen gap-2 flex-col">
      <div>
        <input
          className="border h-[40px] px-2"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter the Todo"
        />
        <button className="border p-2 ml-2 cursor-pointer" onClick={handleAdd}>
          Submit
        </button>
      </div>

      {todos.length > 0 && (
        <div className="mt-10 w-1/2 flex flex-col gap-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between border p-3 bg-slate-100 rounded"
            >
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border px-2 py-1 w-full mr-4"
                />
              ) : (
                <p className="text-slate-800 font-medium">{todo.text}</p>
              )}

              <div className="flex gap-4">
                {editId === todo.id ? (
                  <button
                    className="text-blue-500"
                    onClick={() => handleSave(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="text-green-500"
                    onClick={() => handleEdit(todo.id, todo.text)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(todo.id)}
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
