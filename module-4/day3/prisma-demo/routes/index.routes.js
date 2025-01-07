const prisma = require("../db");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});
router.get("/pets", async (req, res, next) => {
  try {
    const allPets = await prisma.pet.findMany();
    console.log("here are all the pets", allPets);
    res.status(200).json(allPets);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
