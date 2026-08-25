import express from "express";
import db from "../models/index.cjs";
import { mockTasks, validateTask, mergeTaskUpdate } from "../src/utils.js";

const { Task, User } = db;
const router = express.Router();

/*


router.get("/tasks", (req, res) => {
  res.json(mockTasks);
});
*/


router.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll({
    include: User,
  });

  res.json(tasks);
});

/*


router.get("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const task = mockTasks.find(
    (task) => task.id === taskId
  );

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  res.json(task);
});
*/


router.get("/tasks/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id, {
    include: User,
  });

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  res.json(task);
});

/*


router.get("/users", (req, res) => {
  res.json(req.app.locals.cachedUsers);
});
*/


router.get("/users", async (req, res) => {
  const users = await User.findAll();

  res.json(users);
});

/*


let nextId = 4;

router.post("/tasks", (req, res, next) => {
  if (!validateTask(req.body)) {
    const err = new Error(
      "title and dueDate required"
    );

    err.status = 400;
    return next(err);
  }

  const task = {
    id: nextId++,
    ...req.body,
    completed: false,
  };

  mockTasks.push(task);

  res.status(201).json(task);
});
*/


router.post("/tasks", async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json(task);
});

/*


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
*/

// NEW GT8: UPDATE TASK IN POSTGRESQL
router.put("/tasks/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  await task.update(req.body);

  res.json(task);
});

/*


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
    task: removed,
  });
});
*/

// NEW GT8: DELETE TASK FROM POSTGRESQL
router.delete("/tasks/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  await task.destroy();

  res.json({
    message: "Deleted",
    task,
  });
});

export default router;