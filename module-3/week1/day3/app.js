//this is the package that connnects the server to the DB
const mongoose = require("mongoose");
//import the model to insert data into the DB
const PetModel = require("./models/Pet.model");
const OwnerModel = require("./models/User.model");
//mongoose has a method called 'connect' that is a promise and connects us
// the connect expects the ip address of the compass and then after the last / you put the DB name that you want
mongoose
  .connect("mongodb://127.0.0.1:27017/our-first-DB")
  //if it successfully connects then do a console log to affirm
  .then(() => {
    console.log("connected to the Database! Nice work");

    //after succesful connection, create a variable that is the user to insert
    const newPets = [
      {
        name: "Ragnar",
        age: 4,
        friends: ["Joshua", "Sashi"],
        petType: "Dog",
      },
      {
        name: "Sashi",
        age: 4,
        friends: ["Eddi", "Ragnar"],
        petType: "Cat",
      },
      {
        name: "Diego",
        age: 6,
        friends: ["Rob", "Ragnar"],
        petType: "Cat",
      },
    ];
    const oneUser = {
      username: "Ragnar",
      email: "ragnar@ragnar.com",
      password: "1234",
      age: 4,
      friends: ["Joshua"],
      petType: "Dog",
    };

    //**************find with the .populate method ***********/
    OwnerModel.findOne({ userName: "Joshua" })
      .populate("pets")
      .then((user) => console.log("the found owner is", user))
      .catch((err) => console.log(err));
    // //this cleans the DB before inserting
    // PetModel.deleteMany()
    //   .then(() => {
    //     console.log("everything deleted");
    //   })
    //   .catch((err) => console.log(err));

    //insertMany creates an array of users
    // PetModel.insertMany(newPets)
    //   .then((newUsersInDB) => console.log(newUsersInDB))
    //   .catch((err) => console.log(err));

    //use the model to insert or create the data in the DB
    // PetModel.create(oneUser)
    //   .then((res) => {
    //     console.log("user created successfully!", res);
    //   })
    //   .catch((err) => console.log(err));

    //create a owner without a variable
    // OwnerModel.create({ userName: "Joshua" })
    //   .then((newUser) => {
    //     console.log(newUser);
    //   })
    //   .catch((err) => console.log(err));

    //find() method finds many things
    // PetModel.find({ username: "Ragnar" })
    //   .then((allUsers) => {
    //     console.log(allUsers);
    //   })
    //   .catch((err) => console.log(err));
    //findOne() method finds one thing
    // PetModel.findOne({ username: "Ragnar" })
    //   .then((oneUser) => {
    //     console.log('findOne method', oneUser);
    //   })
    //   .catch((err) => console.log(err));

    // //findById() will find one user based on their _id
    // PetModel.findById("67501834b93bf3fa292a67af")
    //   .then((oneUser) => {
    //     console.log("find by id", oneUser);
    //   })
    //   .catch((err) => console.log(err));

    //findByIdAndUpdate() will find one user based on their _id and update them based on the second argument
    OwnerModel.findByIdAndUpdate(
      //first is the id to find
      "67502b4c89bf0b247f74d965",
      //second is what you want to change
      { $push: { pets: "6750283e2fe974eef541aea4" } },
      //third is optional but is if you want the new information
      { new: true }
    )
      .then((updatedUser) => {
        console.log("find by id and update", updatedUser);
      })
      .catch((err) => console.log(err));

    // //findByIdAndDelete() will find one user based on their _id and delete them permanently
    // PetModel.findByIdAndDelete("675016d955b2fd04feb8487e")
    //   .then((deletedUser) => {
    //     console.log("find by id and delete", deletedUser);
    //   })
    //   .catch((err) => console.log(err));

    // //findByOneAndDelete() will find one user and delete them permanently
    // PetModel.findOneAndDelete({ username: "Shashi" })
    //   .then((deletedUser) => {
    //     console.log("find one and delete", deletedUser);
    //   })
    //   .catch((err) => console.log(err));
  })

  //else log the error to fix the problem
  .catch((err) => console.log(err));
