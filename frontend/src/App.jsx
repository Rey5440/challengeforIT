import { useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask, createTask } from "./api/tasks";
import TaskForm from "./components/TaskForm";
import TaskItemMini from "./components/TaskItemMini";
import TaskDetail from "./components/TaskDetail";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    if (data.length > 0 && !selectedTask) setSelectedTask(data[0]);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (task) => {
    await createTask(task);
    await loadTasks();
  };

  const handleUpdate = async (id, data) => {
    await updateTask(id, data);
    await loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setSelectedTask(null);
    await loadTasks();
  };

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      {/* Panel izquierdo: lista y formulario */}
      <div style={{ flex: "1" }}>
        <h2>Crear Nueva Tarea</h2>
        <TaskForm onTaskCreated={handleCreate} />
        <h2>Tareas</h2>
        {tasks.length === 0 && <p>No hay tareas</p>}
        {tasks.map((task) => (
          <TaskItemMini
            key={task.id}
            task={task}
            isSelected={selectedTask?.id === task.id}
            onSelect={() => setSelectedTask(task)}
          />
        ))}
      </div>

      {/* Panel derecho: detalle de tarea */}
      <div style={{ flex: "2" }}>
        <TaskDetail
          task={selectedTask}
          onDelete={handleDelete}
          onToggle={() =>
            selectedTask &&
            handleUpdate(selectedTask.id, {
              completed: !selectedTask.completed,
            })
          }
        />
      </div>
    </div>
  );
}

export default App;
