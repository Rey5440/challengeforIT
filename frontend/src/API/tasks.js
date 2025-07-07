const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/tasks";

export const getTasks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return await res.json();
};

export const createTask = async (task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Error al crear tarea");
  return await res.json();
};

export const updateTask = async (id, updatedTask) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });
  if (!res.ok) throw new Error("Error al actualizar tarea");
  return await res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar tarea");
};
