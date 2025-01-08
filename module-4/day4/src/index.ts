function sumTwoNums(num1: number, num2: number): number {
  return num1 + num2;
}
//arrow function example
const subTwoNums = (num1: number, num2: number): number => {
  return num1 - num2;
};
const BrunosFunc = (): void => {
  console.log("hello there");
};
sumTwoNums(2, 4);
sumTwoNums(2, 10);
BrunosFunc();
BrunosFunc();
//variables
let ourNumber: number = 30;
let ourString: string = "hello";

//arrays
const pets: string[] = ["Ragnar", "Buddy", "Diego"];
const students: Array<string> = ["Bruno", "Malek", "Stephan"];
const arrayOfNums: number[] = [1, 3, 5, 6, 66, 77];

//Tuple
const ourTuple: [string, number, boolean] = ["Harry", 5, true];

//Union
let dog: string | number;

dog = "Ragnar";
dog = 40;

//custom types
type Pet = {
  name: string;
  age: number;
  //the ? means an optional field on the object
  owner?: string;
  friend?: string;
  sayGoodbye: () => void;
};
type ourtype = string;

const myDog: Pet = {
  name: "Ragnar",
  age: 3,
  friend: "Joshua",
  sayGoodbye() {
    console.log("goodbye");
  },
};

//Interface
interface OurType2 {
  name: string;
  sayHello?: (name: string) => void;
}

interface OurType3 extends OurType2 {
  age: number;
}
const newDog: OurType3 = {
  name: "ragnar",
  age: 3,
  sayHello(name) {
    console.log(name, " says hello");
  },
};

//classes

class Person {
  personName: string;
  constructor(firstName: string) {
    this.personName = firstName;
  }
  //methods
  walksDog(): void {
    console.log(this.personName, " walks his dog");
  }
}

const Josh = new Person("Joshua");
