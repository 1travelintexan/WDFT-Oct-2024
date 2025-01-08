"use strict";
function sumTwoNums(num1, num2) {
    return num1 + num2;
}
//arrow function example
const subTwoNums = (num1, num2) => {
    return num1 - num2;
};
const BrunosFunc = () => {
    console.log("hello there");
};
sumTwoNums(2, 4);
sumTwoNums(2, 10);
BrunosFunc();
BrunosFunc();
//variables
let ourNumber = 30;
let ourString = "hello";
//arrays
const pets = ["Ragnar", "Buddy", "Diego"];
const students = ["Bruno", "Malek", "Stephan"];
const arrayOfNums = [1, 3, 5, 6, 66, 77];
//Tuple
const ourTuple = ["Harry", 5, true];
//Union
let dog;
dog = "Ragnar";
dog = 40;
const myDog = {
    name: "Ragnar",
    age: 3,
    friend: "Joshua",
    sayGoodbye() {
        console.log("goodbye");
    },
};
const newDog = {
    name: "ragnar",
    age: 3,
    sayHello(name) {
        console.log(name, " says hello");
    },
};
//classes
class Person {
    constructor(name) {
        this.name = name;
    }
}
const Josh = new Person("Joshua");
