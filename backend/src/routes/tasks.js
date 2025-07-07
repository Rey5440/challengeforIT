const express = require("express");
const router = express.Router();

// Array en memoria como almacenamiento temporal
let tasks = [];
let idCounter = 1;

// GET /api/tasks - Obtener todas las tareas
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST /api/tasks - Crear una nueva tarea
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title) return res.status(400).json({ error: "El título es obligatorio." });

  const newTask = {
    id: idCounter++,
    title,
    description: description || "",
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Actualizar una tarea existente
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = tasks.find((t) => t.id == id);
  if (!task) return res.status(404).json({ error: "Tarea no encontrada." });

  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE /api/tasks/:id - Eliminar una tarea
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const index = tasks.findIndex((t) => t.id == id);
  if (index === -1) return res.status(404).json({ error: "Tarea no encontrada." });

  tasks.splice(index, 1);
  res.status(204).send(); // 204: No Content
});

module.exports = router;
