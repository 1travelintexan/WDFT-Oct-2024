const data = require("./data/pets.json");
//create a variable that is the express package
const express = require("express");
const morgan = require("morgan");
const path = require("path");
//create a server or 'app' variable that is the express called
const app = express();
//create a variable that equals something from the .env or a default
const PORT = process.env.PORT || 5005;

//*******************************************
//middlewares
//app.use creates the middleware
//express.static is a method that tells  our server where our static files are
app.use(express.static("public"));
//morgan logs to the terminal every request that comes to our server
app.use(morgan("dev"));
//express.json() converts request with bodies into data we can use
app.use(express.json());

//******************* */
//routes
//GET route expects two arguments, one is the path and the other a callback function
//the callback function for when you enter the route, gets two arguments...
//the request from the user, and response from the server
app.get("/", (req, res) => {
  //you can do promises... get data the DB... ask apis for data
  //res.send just send basic text
  //res.sendFile is how we send html files but its needs an absolute path
  //__dirname gives us the absolute to path to where we are currently
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/pets", (req, res) => {
  //path.join() example (make sure to require path at the top first)
  //   res.sendFile(path.join(__dirname, "/views/pets.html"));
  //json example
  res.status(201).json(data);
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

//calling an api from a route
app.get("/rick-and-morty", async (req, res) => {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const parsed = await data.json();
    // console.log("inside the rick and morty route", parsed.results);
    res.status(200).json({
      characters: parsed.results,
      message: "here are your characters",
    });
  } catch (error) {
    console.log(error);
  }
});

//first get the server to 'listen' for requests
app.listen(PORT, () => console.log(`server listening on PORT ${PORT}`));
