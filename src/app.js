import { 
    formatDate,
    validateTask,
    mergeTaskUpdate
} from "./utils.js";

import { fetchSampleUsers } from "./api.js";
import { createTask } from "./utils.js";

async function runApp() {
  try {
    const users = await fetchSampleUsers();
    console.log("Users:", users);

    const task = createTask({ title: "Submit GT4", dueDate: "2026-07-29" });

    console.log("Task:", task);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

runApp();



/*
console.log(formatDate(new Date("2026-07-22")));

console.log(validateTask({title: "Submit GT3",dueDate: "2026-07-22"})
);

console.log(validateTask());

console.log(mergeTaskUpdate({ title: "Old" },{ title: "New" })
);

*/