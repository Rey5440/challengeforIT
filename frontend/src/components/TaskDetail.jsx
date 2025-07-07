function TaskDetail({ task, onDelete, onToggle }) {
  if (!task) {
    return (
      <div className="task-detail">
        <p>Seleccioná una tarea para ver los detalles</p>
      </div>
    );
  }

  return (
    <div className="task-detail">
      <h2
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
        }}
      >
        {task.title}
      </h2>
      <p>{task.description}</p>
      <p>
        Estado:{" "}
        <strong style={{ color: task.completed ? "green" : "red" }}>
          {task.completed ? "Completada" : "Pendiente"}
        </strong>
      </p>
      <button onClick={onToggle} style={{ marginRight: "1rem" }}>
        {task.completed ? "Marcar como pendiente" : "Marcar como completada"}
      </button>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          backgroundColor: "crimson",
          marginLeft: "0.5rem",
        }}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskDetail;
