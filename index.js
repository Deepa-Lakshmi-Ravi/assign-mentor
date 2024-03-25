const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const studentRouter = require("./routers/student.router");
const mentorRouter = require("./routers/mentor.router");
const assignstudentmentorRouter = require("./routers/assignStudtoMentor.router");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@assigningmaster.0cygvrq.mongodb.net/Class`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

app.use("/students", studentRouter);
app.use("/mentors", mentorRouter);
app.use("/assign-student-mentor", assignstudentmentorRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my server!!!");
});

// Start the server
const PORT = process.env.PROD_SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
