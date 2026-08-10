import express from "express";
import { mockTasks, validateTask, mergeTaskUpdate } from "../src/utils.js";

const router = express.Router();

router.get("/tasks", (req, res) => { 
    res.json(mockTasks);
});


router.get("/tasks/:id", (req, res) => { 
    const taskId = Number(req.params.id);

  const task = mockTasks.find((task) => task.id === taskId );

  if (!task) {
    return res.status(404).json({ error: "Task not found"});
  }

  res.json(task);
});


router.get("/users", (req, res) => { 
    res.json(req.app.locals.cachedUsers);

});

let nextId = 4;

router.post("/tasks", (req, res, next) => {
  if (!validateTask(req.body)) {
    const err = new Error("title and dueDate required");
    err.status = 400;

    return next(err);
  }

  const task = { id: nextId++, ...req.body,completed: false
  };

  mockTasks.push(task);

  res.status(201).json(task);
});



router.put("/tasks/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const index = mockTasks.findIndex(
    (task) => task.id === id
  );

  if (index === -1) {
    const err = new Error("Task not found");
    err.status = 404;

    return next(err);
  }

  mockTasks[index] = mergeTaskUpdate(
    mockTasks[index],
    req.body
  );

  res.status(200).json(mockTasks[index]);
});



router.delete("/tasks/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const index = mockTasks.findIndex(
    (task) => task.id === id
  );

  if (index === -1) {
    const err = new Error("Task not found");
    err.status = 404;

    return next(err);
  }

  const [removed] = mockTasks.splice(index, 1);

  res.status(200).json({
    message: "Deleted",
    task: removed
  });
});


export default router;