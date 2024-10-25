//a basic object
const dog = {
  name: "Ragnar",
  age: 3,
  "is a good boy": true,
  owner: {
    name: "Joshua",
    address: "France",
    phone: 1233444555,
  },
  bark: function () {
    console.log("Woof Woof");
  },
};
//accessing properties in an object
//with the dot notation
const theDogsAge = dog.age;
//with the bracket notation
const goodBoy = dog["is a good boy"];
//add a new property to an object
dog.toys = ["bone", "tennis ball", "bunny"];
dog.toys.pop();
console.log(dog);
//remove a property
delete dog.age;
//nested objects
const theOwner = dog.owner.name;
//calling a method from an object
dog.bark();
//a loop over an object
//theres is only one way and that is the for in
for (key in dog) {
  //   console.log("key", key);
  //   console.log("value", dog[key]);
}
//Object.keys() and Object.values()
const theKeys = Object.keys(dog);
const theValues = Object.values(dog);
// console.log(theKeys, theValues);
console.log([2] == [2]);
