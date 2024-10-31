//this is a globally scoped variable
const petName = "Ragnar";
const lastName = "Olguin";
if (true) {
  //this is block scoped variable
  //this is variable shadowing when you have two or more variable of the same name at different levels
  //   const lastName = "George";
  //   console.log("inside the if statement", petName, lastName);
}
//you cannot access the lastName outside of the if statement that it was declared
// console.log("outside the if", lastName);
// for (let i = 0; i < 10; i += 1) {
//   console.log(petName);
// }

//Hoisting
const sum = add(2, 3);
// console.log(sum, catName);

function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

var catName = "Diego";

//copies
//primitive data types copy the value
let num1 = "3";
let num2 = num1;
num1 = 10;
//complex data types copy by reference
const arr1 = [1, 2, 3, [5, 6, 7]];
const arr2 = arr1;
arr1.push(4);
arr2.shift();
//deep copies
//JSON parse and JSON stringify
const arr3 = JSON.parse(JSON.stringify(arr1));
arr3.push(10);
//"deep" copy
//spread operator ...
const arr4 = [...arr1];
// arr4[2].push(99);
//structured clone
const arr5 = structuredClone(arr1);
arr5[2].push(99);
console.log({ arr1, arr5 });

//setTimeout
setTimeout(() => {
  console.log("three seconds have passed");
}, 3000);
//setInterval()
let count = 1;
const intervalId = setInterval(() => {
  console.log("hello", count);
  count += 1;
  //clearInterval(intervalId)
  if (count === 3) {
    clearInterval(intervalId);
    console.log("you made it to number 3", count);
  }
}, 1000);
