const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const courseCategory = require("./data/courseCategory.json");
app.get("/course-categories", (req, res) => {
  res.send(courseCategory);
});

app.get("/", (req, res) => {
  res.send("News API Running");
});
app.listen(port, () => {
  console.log(`News API listening on port ${port}`);
});
