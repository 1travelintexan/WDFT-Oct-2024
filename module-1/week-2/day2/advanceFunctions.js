//.map()
const numbersArray = [2, 5, 33, 100, 103];
const users = [
  {
    name: "Joshua",
    email: "jfladkjdfl.com",
    age: 38,
    premium: true,
    bankAcc: 10,
  },
  {
    name: "Ragnar",
    email: "kjdfl.com",
    age: 3,
    premium: false,
    bankAcc: 1,
  },
  {
    name: "Sammy",
    email: "jasdffffffffffl.com",
    age: 38,
    premium: false,
    bankAcc: 100,
  },
  {
    name: "zJordan",
    email: "jasdffffffffffl.com",
    age: 38,
    premium: false,
    bankAcc: 100,
  },
];

const doubleNumbersArray = numbersArray.map((element) => {
  const doubled = element * 2;
  return doubled;
});
//oneliner solution
// const doubleNumbersArray = numbersArray.map((element) => element * 2);

//normal solution
const userNames = users.map((oneUser) => {
  return oneUser.name;
});
//oneliner solution
// const userNames = users.map((oneUser) => oneUser.name);
// console.log(userNames);

//***************.filter() ***********/
const premiumUsers = users.filter((currentUser) => {
  if (currentUser.premium) {
    return true;
  }
});
//oneliner solution
const premiumUsersShort = users.filter((currentUser) => currentUser.premium);
// console.log(premiumUsersShort);
//users under the age of 34
const youngUsers = users.filter((user) => user.age <= 33);
// console.log(youngUsers);

//******************.reduce ***************/
const total = numbersArray.reduce(
  (accumulator, currentElement) => accumulator + currentElement
);
// console.log("total: ", total);
const totalBankAcc = users.reduce((acc, curr) => {
  return acc + curr.bankAcc;
}, 0);
// console.log("Bank acc", totalBankAcc);
const nums = [10345, 2, 1, 0, 0.5, 1, 33, 3, 2, 100];
const strs = ["hello", "abc", "joshua"];
// console.log("Nums before", nums);
//ascending order
nums.sort((a, b) => {
  if (a > b) {
    return 2;
  } else if (a < b) {
    return -4;
  } else {
    return 0;
  }
});
//descending
// nums.sort((a, b) => {
//   if (a > b) {
//     return -1111;
//   } else if (a < b) {
//     return 10;
//   } else {
//     return 0;
//   }
// });
// console.log("Nums after", nums);
function sortAsc() {
  users.sort((a, b) => {
    if (a.age > b.age) {
      return 5;
    } else if (a.age < b.age) {
      return -3;
    } else {
      //check the names of the users when the age is the same
      if (a.name.localeCompare(b.name) > 0) {
        return 1;
      } else if (a.name.localeCompare(b.name) < 0) {
        return -1;
      } else {
        0;
      }
    }
  });
}
// sortAsc();
function sortDes() {
  users.sort((a, b) => {
    if (a.age > b.age) {
      return -5;
    } else if (a.age < b.age) {
      return 3;
    } else {
      return 0;
    }
  });
}
// sortDes();
// console.log("before", users);
// users.reverse();
// console.log("after", users);

let myString = "hello world";
// console.log(myString.split("").reverse().join(""));

//all functions together
const x = users
  .filter((currentUser) => currentUser.bankAcc < 100)
  .map((currentUser) => {
    return { name: currentUser.name, age: currentUser.age };
  })
  .sort((a, b) => b.age - a.age);

console.log(x);
