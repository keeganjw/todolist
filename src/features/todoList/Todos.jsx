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
          important: true,
          urgent: false,
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

        return todo;
      });
    });
  }

  function toggleStatus(id, status) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        // Decide important and urgent based on status
        if (todo.id === id) {
          const important = !status.includes("Not Important");
          const urgent = !status.includes("Not Urgent");
          return { ...todo, important: important, urgent: urgent };
        }

        return todo;
      });
    });
  }

  if (todos.length === 0) {
    return (
      <>
        <TodoItemNew addTodo={addTodo} />
        <h1>No Todos</h1>
      </>
    );
  }

  return (
    <>
      <TodoItemNew addTodo={addTodo} />

      <TodoList
        todos={todos.filter(
          (todo) => todo.important && todo.urgent && !todo.completed,
        )}
        listName={"Important And Urgent"}
        toggleCheck={toggleCheck}
        toggleStatus={toggleStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter(
          (todo) => todo.important && !todo.urgent && !todo.completed,
        )}
        listName={"Important But Not Urgent"}
        toggleCheck={toggleCheck}
        toggleStatus={toggleStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter(
          (todo) => !todo.important && todo.urgent && !todo.completed,
        )}
        listName={"Not Important But Urgent"}
        toggleCheck={toggleCheck}
        toggleStatus={toggleStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter(
          (todo) => !todo.important && !todo.urgent && !todo.completed,
        )}
        listName={"Not Important And Not Urgent"}
        toggleCheck={toggleCheck}
        toggleStatus={toggleStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter((todo) => todo.completed)}
        listName={"Completed"}
        toggleCheck={toggleCheck}
        toggleStatus={toggleStatus}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default Todos;
