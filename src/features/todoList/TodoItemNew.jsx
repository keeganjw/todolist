import { useState } from "react";
import TodoStatusToggles from "./TodoStatusToggles";

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;

    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item" className="block">
          New Item
        </label>
        <input
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
      </div>

      {/* Pass needed props to component */}
      {/* <TodoStatusToggles /> */}

      <button className="my-3 cursor-pointer rounded bg-emerald-700 p-2 text-white hover:bg-emerald-800 active:bg-emerald-900">
        Add
      </button>
    </form>
  );
}
