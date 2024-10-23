// making a single line comment in JS
/* 
this is a multiple 
line 
comment
*/

//Note: reserved keywords cannot be variable names
// const const = 'hello'

//***********  making a variable **************
// let and const, let can be changed and const is never changed
const dogName = "Ragnar";
let oldDogsName = "Buddy";
oldDogsName = "Saleen";
oldDogsName[0] = "L";
console.log(oldDogsName);
let age = 3;
const isAGoodDog = true;
//different types of strings
//'' , "" , ``
//backticks with a variable injected is known as a template literal
const str = `Joshua's dogs name is ${dogName}`;
const str2 = "Joshua's dogs name is" + " " + dogName;
//***********String Methods *************/
//.length returns a number of the length of the string
//typeof operator returns a string of the type that you checked
// console.log("the type is... ", typeof isAGoodDog);
// console.log("length of dogname is...", dogName.length, "hello");
//.slice()
//expects at least one number, with one it will start there and go to the end
//with two numbers it start at the first and end at the second
const upperCasedName = dogName[0].toUpperCase() + dogName.slice(1);
//.includes is a method returns true or false if the string includes what you checked
const doesItHave = str.includes("Jos");
//.indexOf returns a number of the starting index if it finds that substing
// if it doesnt find the substring then it returns -1
const indexOfTheLetterN = dogName.indexOf("z");
// console.log(1 == false);

//***************number methods *********/
let num1 = 9;
const num2 = 5;
//raised to is with the two **
const num3 = num1 ** 2;
//module operator
const odd = num1 % 2 !== 0;
// num1 += 10;
//.round rounds as expected
const roundedNormal = Math.round(num1);
//.ceil always rounds up
const roundedUp = Math.ceil(num1);
//.ceil always rounds down
const roundedDown = Math.floor(num1);
// console.log(roundedDown);
const sqrt = Math.sqrt(num1);
// console.log(sqrt);
//Math.random returns a number between zero and 1 but never

const randomIndex = Math.floor(Math.random() * dogName.length);
// console.log(dogName[randomIndex]);

let isItTrue;
if (2 > 2 || 3 <= 3) {
  isItTrue = true;
} else {
  isItTrue = false;
}
// console.log("is it true ", isItTrue);

//syntax for a for loop
//expects three things
//first is create a variable (typically its call i)
//second when to stop
//third how much to increment by
for (let i = 0; i <= dogName.length; i += 3) {
  //   console.log("i", i);
}

//write a loop counting  backwards from 100
for (let i = 50; i >= 0; i--) {
  if (i % 3 === 0) {
    // console.log("i", i);
  }
}
