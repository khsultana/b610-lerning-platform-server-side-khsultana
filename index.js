const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

app.use(cors());

const courseCategory = require("./data/courseCategory.json");
app.get("/course-categories", (req, res) => {
  res.send(courseCategory);
});

const courseDetails = require("./data/courseDetails.json");
app.get("/course-Details", (req, res) => {
  res.send(courseDetails);
});

app.get("/course-Details/:id", (req, res) => {
  const id = req.params.id;
  const course = courseDetails.find((c) => c._id == id);
  res.send(course);
});

app.get("/course_Id/:id", (req, res) => {
  const id = req.params.id;
  const course_Id = courseDetails.filter((c) => c.course_Id == id);
  res.send(course_Id);
});

app.get("/", (req, res) => {
  res.send("News API Running");
});
app.listen(port, () => {
  console.log(` API listening on port ${port}`);
});

module.exports = app;
