const router = require("express").Router();
const UserModel = require("../models/User.model");

// signup is just creating a user (with the password encrypted)
router.post("/signup", async (req, res, next) => {
  try {
    const createdUser = await UserModel.create(req.body);
    console.log("user created", createdUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "error on signup" });
  }
});

//login is finding the user... based on the email and then comparing the passwords
router.post("/login", async (req, res) => {
  try {
    const foundUser = await UserModel.findOne({ email: req.body.email });
    //if there is a user in the DB with the email that was given in the req.body
    if (foundUser) {
      //if the user exists, then check the passwords
      const userInDBPassword = foundUser.password;
      const userFromFrontEndPassword = req.body.password;
      //the user exists and the passwords match
      if (userInDBPassword === userFromFrontEndPassword) {
        res.status(200).json({ message: "logged in", foundUser });
      } else {
        return res
          .status(500)
          .json({ message: "invalid password credentials" });
      }
    } else {
      return res.status(500).json({ message: "invalid email credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "error on login" });
  }
});

//update user
router.put("/update/:userId", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "updated the user", updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "error on update" });
  }
});

//delete a user
router.delete("/delete/:userId", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.userId);
    res.status(200).json({ message: "deleted the user", deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "error on delete" });
  }
});

//get one specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const oneUser = await UserModel.findById(req.params.userId).populate(
      "toys"
    );
    res.status(200).json({ message: "found the user", oneUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: "error on finding one user" });
  }
});

module.exports = router;
