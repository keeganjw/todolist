import TodoStatusToggles from "./TodoStatusToggles";

export default function TodoItem({
  todo,
  toggleCheck,
  toggleImportant,
  toggleUrgent,
  removeTodo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleCheck(todo.id, e.target.checked)}
          className="mr-2"
        />
        {todo.title}
      </label>

      <TodoStatusToggles
        todo={todo}
        toggleImportant={toggleImportant}
        toggleUrgent={toggleUrgent}
      />

      <button
        onClick={() => removeTodo(todo.id)}
        className="ml-2 font-bold text-neutral-500 hover:text-red-700"
      >
        X
      </button>
    </li>
  );
}
