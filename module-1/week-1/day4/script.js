//conditionals
const number = 0;
// if (number > 0) {
//   console.log("bigger than zero");
// } else if (number < 0) {
//   console.log("less than zero");
// } else {
//   console.log("the number is zero");
// }
//switch
// switch (true) {
//   case number > 0:
//     console.log("the number is greater than zero");
//     break;
//   case number < 0:
//     console.log("the number is less than zero");
//     break;
//   default:
//     console.log("the number is zero");
// }

// //loops
//fizz buzz
//make a for loop counting to 100
//if i is divisible by 3 then console.log('Fizz')
//if i is divisible by 5 then console.log('Buzz')
//if i is divisible by 3 and 5 then console.log('Fizz Buzz')
//else... console.log i
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
//while loop
let num = 0;
// while (num <= 10) {
//   if (num === 5) {
//     // console.log("it was 5");
//     num++;
//     continue;
//   } else {
//     console.log("num is...", num);
//     num++;
//   }
//   //to aviod an infinite looop... alway increment the check
// }
//do while loop
//always executes at least least once
// do {
//   console.log("inside the do while ", num);
//   num++;
// } while (num <= 10);

//functions
//declaring functions (function keyword and fat arrow (ES-6))
//function keyword syntax
function addTwoNums(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
//fat arrow syntax
const subtractTwoNums = (num1, num2) => {
  const difference = num1 - num2;
  return difference;
};

//invoking a function
addTwoNums(2, 3);
subtractTwoNums(10, 2);
//storing the return value of a function into a variable
const theSum = addTwoNums(5, 10);
const theDifference = subtractTwoNums(3, 1);
// console.log(theDifference);

//Arrays
const arr = [1, addTwoNums, true];
//.push() add an element to the back
arr.push(4);
//.unshift add an element to the front
arr.unshift(true);
//.pop() removes the last element
// arr.pop();
// //.shift() removes the first element
// arr.shift();
//splice() can remove one or multiple elements at different indexes, also ... it can add something in the place of an index
// console.log("before splice", arr);
// // arr.splice(3, arr.length - 2);
// console.log("after splice", arr);
//indexOf returns the index of the thing you are looking for or -1 if it wasnt found
// const indexOfHello = arr.indexOf("hello");
// console.log("before splice", arr);
// arr.splice(indexOfHello, 1);
// console.log("after splice", arr);

//for loop over arr
//grab the last index of an array with the .length
// console.log(arr[arr.length - 1][2]);
// //grab the last index of an array with the .at method
// console.log(arr.at(-1)[2]);

// for (let i = 0; i < arr.length; i++) {
//   const currentElement = arr[i];
//   console.log(currentElement);
// }

//forEach method is a short version of the for loop
//forEach expects a callback function as an argument
//the callback gives you three things, the current element, the index of that element and the whole array
const newArr = [];
arr.forEach((curr, index) => {
  if (index % 2 === 0) {
    // console.log("hellow", curr, index);
    newArr.push(curr);
  }
});
// console.log(newArr);

//sum an array of numbers
const arrOfNums = [4, 6, 10, 15];
const arrOfNums2 = [43, 56, 710, 15];
let total = 0;
arrOfNums2.forEach(function (currentNumber, index, wholeArray) {
  total += currentNumber;
});
// console.log(total);
function sumAnArray(parameterArray) {
  let total = 0;
  parameterArray.forEach(function (currentNumber) {
    total += currentNumber;
  });
  return total;
}
console.log(sumAnArray(arrOfNums));
console.log(sumAnArray(arrOfNums2));
