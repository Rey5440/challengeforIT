
# Instrucciones

1. Instalar las dependencias con "npm i"

2. Levantar el back con el comando "npm start" en la consola

3. Levantar el frontend: "npm run dev"

4. Abrir la aplicación en el navegador: Usa ctrl+click sobre el link que aparece en la consola o abrí manualmente "http://localhost:5173"

# Funcionamiento

- Las tareas tienen un *título* y una *descripción*.
- Si no hay tareas en el backend, se mostrará un mensaje indicando que no hay tareas.
- Si ya existen tareas, se mostrarán en miniatura en una lista a la izquierda.
- Al hacer clic en una tarea, se selecciona y se muestra el detalle a la derecha.
- El CRUD está completamente funcional:
  - Crear tareas
  - Leer (ver la lista y detalles)
  - Actualizar estado (completada/pendiente)
  - Eliminar tareas

# Notas

- Los datos se almacenan en un *array en memoria*, por lo que se reinician al refrescar el backend.
- La comunicación entre frontend y backend se hace mediante `fetch`.
