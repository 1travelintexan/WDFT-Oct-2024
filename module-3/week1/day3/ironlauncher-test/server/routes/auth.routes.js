const router = require("express").Router();

router.post("/signup", (req, res, next) => {
  //get the data from the front in the req.body
  //then use UserModel to create a user with the req.body
  //then you have the new user and you send it as json
  res.json({ newUser: newUserInDB, message: "user created, nice work" });
});

module.exports = router;
