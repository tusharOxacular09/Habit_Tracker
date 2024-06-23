import mongoose from "mongoose";

const DailyStatusSchema = new mongoose.Schema({
  taskDate: {
    type: Date,
    default: new Date(),
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["Done", "Not Done", "None"],
    default: "None",
  },
});

const taskSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    isAvailable: Boolean,
    totalDays: {
      type: Number,
      default: 75,
    },
    completedDays: {
      type: Number,
      default: 0,
    },
    dailyStatus: [DailyStatusSchema],
  },
  { timestamps: true }
);

export const taskModel = mongoose.model("Tasks", taskSchema);
