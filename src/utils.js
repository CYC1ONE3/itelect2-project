
export const formatDate = (date) => { 
  return `Due: ${date.toLocaleDateString()}`;
};

export const validateTask = (...tasks) => { const [{ title, dueDate } = {}] = tasks;
  return Boolean(title && dueDate);
};

export const mergeTaskUpdate = (original, ...updates) => Object.assign({}, original, ...updates);