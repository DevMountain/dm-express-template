const process = require("process");
const path = require("path");
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/hello", (req, res) => {
  res.render("hello.html", { name: req.query.name });
});

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${server.address().port}...`);
});
