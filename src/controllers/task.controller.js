import { availableTasks } from "../../public/static/allTasks.js";
import { taskModel } from "../models/task.model.js";

// Add Task Controller
export const addTask = async (req, res, next) => {
  try {
    let { task } = req.body;
    if (!task) {
      return res.redirect("/add-task");
    }

    // Parsing the task
    task = JSON.parse(task);

    // Adding the task in the database
    await taskModel.findOneAndUpdate({ name: task?.name }, task, {
      upsert: true,
    });

    // Disable the task in run time
    const taskIndex = availableTasks.findIndex(
      (restTask) => restTask.name == task.name
    );
    if (taskIndex !== -1) {
      availableTasks[taskIndex]["isAvailable"] = false;
    }

    // Rendering the view with the new task
    return res.redirect("/view-tasks");
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { taskId, date, status } = req.body;

    if (!taskId || !status) {
      console.log("All Fields are Required..");
      return res.redirect("/view-tasks");
    }
    const taskDate = date ? new Date(date) : new Date();

    // Updating Task
    const update = {
      $push: {
        dailyStatus: {
          taskDate: taskDate,
          status: status,
        },
      },
    };

    if (status == "Done") {
      update.$inc = { completedDays: 1 };
      update.$push.dailyStatus.isCompleted = true;
    }

    await taskModel.findByIdAndUpdate(taskId, update);

    // After Successful Update return success message
    res
      .status(200)
      .json({ success: true, message: "Successfully Updated the task." });
  } catch (error) {
    next(error);
  }
};
