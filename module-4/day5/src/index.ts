const people = ["Malek", "Joshua", "Bruno", "Stephan"];
const numbers = [1, 3, 4, 5, 77];
//*******generics **********/
function getRandom<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

getRandom(people);
getRandom(numbers);

//type with a generic
type person<T> = {
  name: string;
  age: number;
  friends?: T[];
};

const Joshua: person<string> = {
  name: "Josh",
  age: 38,
  friends: ["Malek", "Bruno", "Stephan"],
};

const Ragnar: person<number> = {
  name: "Ragni",
  age: 3,
};
