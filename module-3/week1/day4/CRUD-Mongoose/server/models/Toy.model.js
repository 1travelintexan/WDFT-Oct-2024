const { Schema, model } = require("mongoose");

const toySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  petType: {
    type: String,
    enum: ["dog", "cat", "bird", "fish", "other"],
    required: true,
  },
});

const ToyModel = model("toy", toySchema);
module.exports = ToyModel;
