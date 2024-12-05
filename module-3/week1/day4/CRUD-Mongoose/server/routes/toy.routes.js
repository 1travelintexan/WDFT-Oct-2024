const router = require("express").Router();
const ToyModel = require("../models/Toy.model");
router.post("/create", async (req, res) => {
  try {
    const createdToy = await ToyModel.create(req.body);
    console.log("toy created", createdToy);
    res.status(201).json(createdToy);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "error on toy creation" });
  }
});

module.exports = router;
