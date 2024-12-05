const express = require("express");
const logger = require("morgan");
const RecipeModel = require("./models/Recipe.model");
const app = express();
const mongoose = require("mongoose");
// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION

const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// ROUTES
//  GET  / route - This is just an example route
app.get("/", (req, res) => {
  res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route
app.post("/recipe", async (req, res) => {
  console.log(req.body);
  try {
    //insert the body into the DB
    const createdRecipe = await RecipeModel.create({
      title: req.body.recipeTitle,
      ...req.body,
    });
    console.log("recipe created, nice work", createdRecipe);
    res.status(201).json({ message: "created :)", recipe: createdRecipe });
  } catch (error) {
    console.log("there was a problem", error);
    res.status(500).json({ message: "Please format recipe correctly" });
  }
});

//  Iteration 4 - Get All Recipes
//  GET  /recipes route
app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find().sort([["created", 1]]);
    console.log("Here are all the recipes", allRecipes);
    res
      .status(200)
      .json({ message: "here are all the recipes", recipes: allRecipes });
  } catch (error) {
    console.log("there was a problem in the get recipes route", error);
    res.status(500).json({ message: "No recipes found" });
  }
});
//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route
app.get("/recipe/:recipeId", async (req, res) => {
  try {
    const { recipeId } = req.params;
    console.log("the params", recipeId);
    const oneRecipe = await RecipeModel.findById(recipeId);
    console.log("Here is the one recipe", oneRecipe);
    res.status(200).json({ message: "Here is the one recipe", oneRecipe });
  } catch (error) {
    console.log("there was a problem in the detail recipe route", error);
    res.status(500).json({ message: "No recipe found" });
  }
});

//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route
app.put("/recipe/:pizzaId", async (req, res) => {
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.pizzaId,
      req.body,
      { new: true, runValidators: true }
    );
    console.log("Here is the updated recipe", updatedRecipe);
    res
      .status(200)
      .json({ message: "Here is the updated recipe", updatedRecipe });
  } catch (error) {
    console.log("there was a problem in the update route", error);
    res.status(500).json({ message: "No recipe updated" });
  }
});
//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
app.delete("/recipe/:recipeId", async (req, res) => {
  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(
      req.params.recipeId
    );
    console.log("Here is the deleted recipe", deletedRecipe);
    res
      .status(204)
      .json({ message: "Recipe successfully deleted", deletedRecipe });
  } catch (error) {
    console.log("there was a problem in the delete route", error);
    res.status(500).json({ message: "Not Deleted" });
  }
});

// Start the server
app.listen(5005, () => console.log("My first app listening on port 5005!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
