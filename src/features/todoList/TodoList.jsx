import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<>
			<ul className="list">
				{todos.length === 0 && 'None'}
				{todos.map((todo) => {
					return (
						<TodoItem
							{...todo}
							toggleTodo={toggleTodo}
							deleteTodo={deleteTodo}
							key={todo.id}
						/>
					);
				})}
			</ul>
		</>
	);
}
