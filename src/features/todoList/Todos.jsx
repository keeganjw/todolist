import { useEffect, useState } from "react";
import TodoItemNew from "./TodoItemNew";
import TodoList from "./TodoList";

function Todos() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODOS");
    let result = [];

    if (localValue) result = JSON.parse(localValue);

    return result;
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
          important: "NotImportant",
          urgent: "NotUrgent",
        },
      ];
    });
  }

  function removeTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function toggleCheck(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };
        else return todo;
      });
    });
  }

  function toggleImportant(id, important) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id)
          return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            important: important,
            urgent: todo.urgent,
          };
        else return todo;
      });
    });
  }

  function toggleUrgent(id, urgent) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id)
          return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            important: todo.important,
            urgent: urgent,
          };
        else return todo;
      });
    });
  }

  return (
    <>
      <TodoItemNew addTodo={addTodo} />

      <h1 className="mt-4">Todo</h1>
      <TodoList
        todos={todos.filter((todo) => !todo.completed)}
        toggleCheck={toggleCheck}
        toggleImportant={toggleImportant}
        toggleUrgent={toggleUrgent}
        removeTodo={removeTodo}
      />

      <h1 className="mt-4">Completed</h1>
      <TodoList
        todos={todos.filter((todo) => todo.completed)}
        toggleCheck={toggleCheck}
        toggleImportant={toggleImportant}
        toggleUrgent={toggleUrgent}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default Todos;
