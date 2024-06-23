import { Router } from "express";
import {
  homePage,
  addTaskPage,
  addTask,
  viewTasks,
  updateTask,
} from "../controllers/index.js";

const trackerRouter = Router();

trackerRouter
  .get("/", homePage)
  .get("/add-task", addTaskPage)
  .post("/add-task", addTask)
  .get("/view-tasks", viewTasks)
  .put("/update-task", updateTask);

export { trackerRouter };
