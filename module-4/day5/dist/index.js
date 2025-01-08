"use strict";
const people = ["Malek", "Joshua", "Bruno", "Stephan"];
const numbers = [1, 3, 4, 5, 77];
//*******generics **********/
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
getRandom(people);
getRandom(numbers);
const Joshua = {
    name: "Josh",
    age: 38,
    friends: ["Malek", "Bruno", "Stephan"],
};
const Ragnar = {
    name: "Ragni",
    age: 3,
};
