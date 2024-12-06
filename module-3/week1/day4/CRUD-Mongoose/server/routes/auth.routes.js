const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
// signup is just creating a user (with the password encrypted)
router.post("/signup", async (req, res, next) => {
  //destructur the req.body to get the keys from the object
  const { username, email, password } = req.body;
  try {
    //look in the DB for the email and if it exists throw error
    const emailAlreadyTaken = await UserModel.findOne({ email });
    if (emailAlreadyTaken) {
      res.status(403).json({ message: "Invalid Credentials" });
      //if the user doesnt exist then we hash the password and create them
    } else {
      //first generate the salt to add to the password to make it more secure
      const salt = bcryptjs.genSaltSync(12);
      //use the salt and the password to make a 'hashed' password
      const hashedPassword = bcryptjs.hashSync(password, salt);
      //create a new variable that is the req.body but with the password changed to be the hashed password
      const hashedUser = {
        username,
        email,
        password: hashedPassword,
      };
      const createdUser = await UserModel.create(hashedUser);
      console.log("user created", createdUser);
      res.status(201).json(createdUser);
    }
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
      const DBPassword = foundUser.password;
      const loginPassword = req.body.password;
      //compare the req.body.password to the hashed password in the DB
      const passwordsMatch = bcryptjs.compareSync(loginPassword, DBPassword);
      console.log("does password match", passwordsMatch);

      //the user exists and the passwords match
      if (passwordsMatch) {
        //if the passwords match then the user gets a login token
        //first take the information that you want from the foundUser
        const { _id, username } = foundUser;
        const currentUser = { _id, username };
        const authToken = jwt.sign(currentUser, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });
        console.log("here is the auth token", authToken);
        res.status(200).json({ message: "logged in", authToken });
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

//verify route to check the JWT token
router.get("/verify", isAuthenticated, (req, res) => {
  console.log("made it to the /verify route", req.payload);
  res
    .status(200)
    .json({ message: "user verified", currentUser: req.payload.currentUser });
});
module.exports = router;
