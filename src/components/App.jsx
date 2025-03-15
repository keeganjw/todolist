import { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
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
				{ id: crypto.randomUUID(), title: title, completed: false },
			];
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) return { ...todo, completed };
				else return todo;
			});
		});
	}

	return (
		<>
			<NewTodoForm addTodo={addTodo} />

			<h1 className="header">Todo</h1>
			<TodoList
				todos={todos.filter((todo) => !todo.completed)}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>

			<h1 className="header">Completed</h1>
			<TodoList
				todos={todos.filter((todo) => todo.completed)}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
}

export default App;
