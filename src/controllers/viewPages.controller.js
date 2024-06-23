import { availableTasks } from "../../public/static/allTasks.js";
import { getCurrentWeekStatus } from "../utils/getCurrentWeekStatus.js";
import { taskModel } from "../models/task.model.js";

// Home Page
export const homePage = async (req, res, next) => {
  try {
    return res.render("layout", { view: "home" });
  } catch (error) {
    next(error);
  }
};

// Add Task Page
export const addTaskPage = async (req, res, next) => {
  try {
    return res.render("layout", { view: "add-task", availableTasks });
  } catch (error) {
    next(error);
  }
};

// View Tasks
export const viewTasks = async (req, res, next) => {
  try {
    const tasks = await taskModel.find({});
    const tasksWithCurrentWeekStatus = tasks.map((task) => ({
      ...task.toObject(),
      currentWeekStatus: getCurrentWeekStatus(task.dailyStatus),
    }));

    res.render("layout", {
      view: "view-tasks",
      tasks: tasksWithCurrentWeekStatus,
    });
  } catch (error) {
    next(error);
  }
};
