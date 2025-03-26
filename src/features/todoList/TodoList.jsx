import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  toggleCheck,
  toggleImportant,
  toggleUrgent,
  removeTodo,
}) {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "None"}
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              toggleCheck={toggleCheck}
              toggleImportant={toggleImportant}
              toggleUrgent={toggleUrgent}
              removeTodo={removeTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    </>
  );
}
