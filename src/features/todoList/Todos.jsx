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

  function addTodo(title, status) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          status: status,
          completed: false,
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

  function changeStatus(id, status) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        return { ...todo, status: status };
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
          (todo) => todo.status === "Important And Urgent" && !todo.completed,
        )}
        listName={"Important And Urgent"}
        toggleCheck={toggleCheck}
        changeStatus={changeStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter(
          (todo) =>
            todo.status === "Important But Not Urgent" && !todo.completed,
        )}
        listName={"Important But Not Urgent"}
        toggleCheck={toggleCheck}
        changeStatus={changeStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter(
          (todo) =>
            todo.status === "Not Important But Urgent" && !todo.completed,
        )}
        listName={"Not Important But Urgent"}
        toggleCheck={toggleCheck}
        changeStatus={changeStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter(
          (todo) =>
            todo.status === "Not Important And Not Urgent" && !todo.completed,
        )}
        listName={"Not Important And Not Urgent"}
        toggleCheck={toggleCheck}
        changeStatus={changeStatus}
        removeTodo={removeTodo}
      />

      <TodoList
        todos={todos.filter((todo) => todo.completed)}
        listName={"Completed"}
        toggleCheck={toggleCheck}
        changeStatus={changeStatus}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default Todos;
