import { deleteTask, updateTask } from "../API/tasks";

function TaskItem({ task, onTaskUpdated }) {
  const handleDelete = async () => {
    await deleteTask(task.id);
    onTaskUpdated();
  };

  const handleToggle = async () => {
    await updateTask(task.id, { completed: !task.completed });
    onTaskUpdated();
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "4px" }}>
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <button onClick={handleToggle}>
        {task.completed ? "Marcar incompleta" : "Marcar completa"}
      </button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default TaskItem;
