
export const formatDate = (date) =>
  `Due: ${date.toLocaleDateString()}`;

export const validateTask = ({ title, dueDate } = {}) =>
  Boolean(title && dueDate);

export const mergeTaskUpdate = (original, ...updates) =>
  Object.assign({}, original, ...updates);


export class TaskValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "TaskValidationError";
  }
}

export const createTask = (taskData) => {
  if (!validateTask(taskData)) {
    throw new TaskValidationError("Invalid task data");
  }

  return { id: Date.now(), completed: false, ...taskData
  };
};


export const mockTasks = [
  {
    id: 1,
    title: "Submit GT3",
    dueDate: "2026-07-22",
    completed: true
  },
  {
    id: 2,
    title: "Submit GT4",
    dueDate: "2026-07-29",
    completed: false
  },
  {
    id: 3,
    title: "Submit GT5",
    dueDate: "2026-08-05",
    completed: false
  }
];