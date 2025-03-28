import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  listName,
  toggleCheck,
  toggleStatus,
  removeTodo,
}) {
  if (todos.length === 0) {
    return <></>;
  }

  return (
    <>
      <h1 className="mt-4">{listName}</h1>
      <ul className="list">
        {todos.length === 0 && "None"}
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              toggleCheck={toggleCheck}
              toggleStatus={toggleStatus}
              removeTodo={removeTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    </>
  );
}
