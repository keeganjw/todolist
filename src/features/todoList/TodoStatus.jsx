export default function TodoStatus({ todo, changeStatus }) {
  if (!todo) {
    return <></>;
  }

  return (
    <>
      <select
        name="todo-status"
        onChange={(e) => changeStatus(todo.id, e.target.value)}
        value={todo.status}
      >
        <option>Important And Urgent</option>
        <option>Important But Not Urgent</option>
        <option>Not Important But Urgent</option>
        <option>Not Important And Not Urgent</option>
      </select>
    </>
  );
}
