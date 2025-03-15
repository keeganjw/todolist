import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
	const [newItem, setNewItem] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!newItem) return;

		addTodo(newItem);
		setNewItem("");
	}

	return (
		<form className="new-item-form" onSubmit={handleSubmit}>
			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input
					type="text"
					id="item"
					onChange={(e) => setNewItem(e.target.value)}
					value={newItem}
				/>
			</div>

			<button className="btn">Add</button>
		</form>
	);
}
