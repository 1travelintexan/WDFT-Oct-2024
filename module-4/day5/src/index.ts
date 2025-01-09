const people = ["Malek", "Joshua", "Bruno", "Stephan"];
const numbers = [1, 3, 4, 5, 77];

console.log("hello");
//*******generics **********/
function getRandom<T>(arr: T[]) {
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

//**************Utility types ******/
//make every property optional
type user = {
  name: string;
  email: string;
  password: string;
};

type userOptional = Partial<user>;

//make every property required
type userOptional2 = {
  name?: string;
  email: string;
  password?: string;
};
type userRequired = Required<userOptional2>;

//remove properties that you do NOT want
type bigUser2 = {
  name: string;
  email: string;
  password: string;
  LastName: string;
  age: number;
  phoneNumber: string;
};
type smallUser2 = Omit<bigUser2, "phoneNumber" | "email" | "password">;
