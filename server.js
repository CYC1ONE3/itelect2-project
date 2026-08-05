import "dotenv/config";
import express from "express";
import router from "./routes/index.js";
import { fetchSampleUsers } from "./src/api.js";

const app = express();

const PORT = process.env.PORT || 3000;


function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);



app.use("/api", router);

async function startServer() {
  
  const cachedUsers = await fetchSampleUsers();

  
  app.locals.cachedUsers = cachedUsers;

  app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
  });
}

startServer();