// demo.js

const prisma = require("./db/index");

const newUsers = [
  {
    username: "Joshua",
    email: "joshua@joshua.com",
    password: "1234",
  },
  {
    username: "Malek",
    email: "Malek@Malek.com",
    password: "1234",
  },
  {
    username: "Bruno",
    email: "bruno@bruno.com",
    password: "1234",
  },
];
const newPets = [
  {
    name: "Ragnar",
    age: 3,
    ownerId: "cm5m9kfo70000f7xaj9mejogj",
  },
  {
    name: "Buddy",
    age: 12,
    ownerId: "cm5m9kfo70001f7xanm656ppx",
  },
  {
    name: "Diego",
    age: 6,
    ownerId: "cm5m9kfo70002f7xa71p4bldm",
  },
];

// prisma.user
//   .createMany({ data: newUsers })
//   .then((user) => {
//     console.log("Success... a new user was created!!");
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log("Something went wrong...");
//     console.log(error);
//   });

//creating many pets
// prisma.pet
//   .createMany({ data: newPets })
//   .then((res) => {
//     console.log("pets added, nice work", res);
//   })
//   .catch((err) => console.log(err));

//read all of the pets
// prisma.pet
//   .findMany()
//   .then((res) => {
//     console.log("Here are all the pets", res);
//   })
//   .catch((err) => console.log(err));

//find first ex
// prisma.user
//   .findFirst({ where: { username: "Joshua" } })
//   .then((res) => {
//     console.log("Here is the first user", res);
//   })
//   .catch((err) => console.log(err));

//find unique needs something unique
// prisma.user
//   .findUnique({ where: { id: "cm5m9kfo70000f7xaj9mejogj" } })
//   .then((res) => {
//     console.log("Here is the unique user", res);
//   })
//   .catch((err) => console.log(err));

//find first pet with a populate or an INNER JOIN with sql
// prisma.pet
//   .findFirst({ where: { name: "Ragnar" }, include: { owner: true } })
//   .then((res) => {
//     console.log("Here is the first pet", res);
//   })
//   .catch((err) => console.log(err));

//update a pet
// prisma.pet
//   .update({
//     where: { id: "cm5ma0kbf0000w3y3uhovqcmg" },
//     data: { name: "Ragni" },
//   })
//   .then((res) => {
//     console.log("pet updated", res);
//   })
//   .catch((err) => console.log(err));

//delete a user
prisma.user
  .delete({ where: { id: "cm5m9kfo70000f7xaj9mejogj" } })
  .then((res) => {
    console.log("user deleted", res);
  })
  .catch((err) => console.log(err));
