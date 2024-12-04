const { Schema, model } = require("mongoose");

const ownerSchema = new Schema({
  userName: String,
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "pet",
    },
  ],
});

const OwnerModel = model("owner", ownerSchema);

module.exports = OwnerModel;
