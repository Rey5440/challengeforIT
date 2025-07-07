const express = require("express");
const router = express.Router();

const tasksRouter = require("./tasks");

// Redirige todas las rutas que empiecen con /api/tasks al router de tareas
router.use("/api/tasks", tasksRouter);

module.exports = router;
