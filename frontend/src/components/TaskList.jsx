import { useEffect, useState } from "react";
import { getTasks } from "../API/tasks";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Error al cargar tareas", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 && <p>No hay tareas</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onTaskUpdated={loadTasks} />
      ))}
    </div>
  );
}

export default TaskList;
