class Person {
  static numberOfPeople = 0;
  #SSN = 1;
  //every class needs a constructor
  constructor(name, age, phoneNumber, address, friends = []) {
    this.phoneNumber = phoneNumber;
    this.age = age;
    this.name = name;
    this.friends = friends;
    this.address = address;
    Person.numberOfPeople++;
    this.#SSN++;
  }
  static howManyPeople() {
    console.log("There are ", Person.numberOfPeople, " in the world");
  }
  getSSN() {
    console.log("the SSN of ", this.name, " is ...", this.#SSN);
  }
  sayHello() {
    console.log(
      "Hello my name is ...",
      this.name,
      " and my age is...",
      this.age
    );
  }
  hasABirthday() {
    this.age++;
    console.log(`Happy Birthday, I am now ... ${this.age} `);
  }
  madeAFriend(newFriendName) {
    this.friends.push(newFriendName);
  }
}

// const exObj = {name: "josh", age: 38}
const Joshua = new Person("Joshua", 38, 12432423421, {
  street: "france way",
  number: 123,
  country: "Fr",
});
const Sammy = new Person(
  "Samantha",
  32,
  1243342351,
  {
    street: "Houston way",
    number: 123,
    country: "USA",
  },
  [("anna", "beth")]
);
const Ragnar = new Person("Ragnar", 3, 12323);
// Joshua.getSSN();
// Sammy.getSSN();
// console.log(Joshua.SSN);
// console.log("New person", Joshua);
// console.log("New person 2", Sammy);
//this is calling a method on a class
// Joshua.sayHello();
//calling a method that adds to a property in the class
// Joshua.hasABirthday();
// Joshua.madeAFriend("Ragnar");
// console.log("Joshua after", Joshua);
// Sammy.sayHello();

//****************** extending a class *****************/

class SuperHero extends Person {
  constructor(name, superHeroName, age, phoneNumber, address, friends) {
    super(name, age, phoneNumber, address);
    this.superHeroName = superHeroName;
  }
  //this is overwriting the original without effecting the original
  sayHello() {
    console.log(
      "Hello my name is ...",
      this.name,
      " and my age is...",
      this.age,
      " and my alter ego is ...",
      this.superHeroName
    );
  }
  fightCrime() {
    console.log("Going out and saving innocents ...");
  }
}
const Batman = new SuperHero("Bruce", "Batman", 34, 123444545, {
  street: "Wayne Manor Way",
  number: 111,
  country: "Gotham",
});
// Person.howManyPeople();
// Batman.fightCrime();

// console.log(Batman.superHeroName);
// console.log(Joshua.superHeroName);
// Batman.hasABirthday();

// create a class Rectangle
// that class should have two sides in constructor
// one side is the height and the the width
// the class should have two methods... one to the calculate the area
// the other method should calculate the perimeter
// then make a class Square that extends Rectangle
// make a new method that is only in the Square class

//**************this  *************/
//this refers to the entire window object when its just in the code
console.log(this);
const obj = {
  name: "Annie",
  testingThis: function () {
    console.log("inside function keyword", this);
  },
};
obj.testingThis();
