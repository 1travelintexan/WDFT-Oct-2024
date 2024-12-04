// const mongoose = require("mongoose");
// const schema = mongoose.Schema;
//better to destructur directly the Schema and model
const { Schema, model } = require("mongoose");

//this defines the shape of the data in the collection
const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
  },
  friends: [String],
  petType: {
    type: String,
    enum: ["Dog", "Cat", "Other"],
    required: true,
  },
});

//make a model that takes the collection name that you want and the shape (the schema)
const PetModel = model("pet", petSchema);

//export the model to use on other files
module.exports = PetModel;
