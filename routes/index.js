import express from "express";
import { mockTasks } from "../src/utils.js";

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

export default router;