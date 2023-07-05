import express, { Request, Response } from "express";
const app = express();
import { PORT } from "./config";

import bodyparser from "body-parser";
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

import student from "./routes/student.route";
import teacher from "./routes/teacher.route";
import course from "./routes/course.route";
import classes from "./routes/class.route";
import reportcard from "./routes/reportcard.route";
import complaint from "./routes/complaint.route";
import attendance from "./routes/attendance.route";
import db from "./models";
const route = express.Router();

//var cors = require("cors");
//app.use(cors());

const main = async () => {
  await db.authenticate();
  app.use("/students", student);
  app.use("/teacher", teacher);
  app.use("/course", course);
  app.use("/class", classes);
  app.use("/reportcard", reportcard);
  app.use("/complaint", complaint);
  app.use("/attendance", attendance);
};

main();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
