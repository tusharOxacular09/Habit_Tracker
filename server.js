import "dotenv/config.js";
import app from "./app.js";
import { mongoDbConnector } from "./src/config/mongodb.config.js";

// Listening the server
app.listen(process.env.PORT, () => {
  console.log(
    `🚀 Habit Tracker Server Is Running On PORT ${process.env.PORT}.🚀`
  );
  // MongoDb Connection
  mongoDbConnector();
});
