export default function TodoStatusToggles({
  todo,
  toggleImportant,
  toggleUrgent,
}) {
  return (
    <>
      <select
        name="statusImportant"
        onChange={(e) => toggleImportant(todo.id, e.target.value)}
        value={todo.important}
      >
        <option value="Important">Important</option>
        <option value="NotImportant">Not Important</option>
      </select>

      <select
        name="statusUrgent"
        onChange={(e) => toggleUrgent(todo.id, e.target.value)}
        value={todo.urgent}
      >
        <option value="Urgent">Urgent</option>
        <option value="NotUrgent">Not Urgent</option>
      </select>
    </>
  );
}
