// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
// CREATE EXPRESS APP
// Here you should create your Express app:
const articles = require("./data/articles.json");
const projects = require("./data/projects.json");
// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
// Start defining your routes here:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/blog", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/views/blog.html"));
});
app.get("/pizza/articles", (req, res) => {
  res.status(200).json(articles);
});
app.get("/api/projects", (req, res) => {
  res.status(200).json(projects);
});

//404
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/not-found.html");
});
// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("server is running on port 5005"));
