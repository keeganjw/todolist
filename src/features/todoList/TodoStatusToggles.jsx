export default function TodoStatusToggles({ todo, toggleStatus }) {
  // IU, INU, NIU, NINU
  function decideStatus() {
    if (todo.important && todo.urgent) {
      return "Important And Urgent";
    } else if (todo.important && !todo.urgent) {
      return "Important But Not Urgent";
    } else if (!todo.important && todo.urgent) {
      return "Not Important But Urgent";
    } else if (!todo.important && !todo.urgent) {
      return "Not Important And Not Urgent";
    }
  }

  return (
    <>
      <select
        name="todo-status"
        onChange={(e) => toggleStatus(todo.id, e.target.value)}
        value={decideStatus()}
      >
        <option>Important And Urgent</option>
        <option>Important But Not Urgent</option>
        <option>Not Important But Urgent</option>
        <option>Not Important And Not Urgent</option>
      </select>
    </>
  );
}
