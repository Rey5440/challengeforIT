function TaskItemMini({ task, onSelect, isSelected }) {
  return (
    <div
      onClick={onSelect}
      className={`task-mini ${isSelected ? "selected" : ""}`}
    >
      <strong>{task.title}</strong> {task.completed ? "✅" : ""}
    </div>
  );
}

export default TaskItemMini;
