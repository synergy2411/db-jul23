// Destructuring : "unpacking the collection"

// Collection : Object & Array

// let personOne = {
//   name: "John Doe",
//   age: 32,
//   email: "test@test.com",
// };

// let personTwo = {
//   name: "Jenny Doe",
//   age: 28,
//   email: "jenny@test.com",
// };

// let { email: userOneEmail, name: userOneName } = personOne;
// let { email: userTwoEmail, name: userTwoName } = personTwo;

// console.log("Email : ", userTwoEmail);
// console.log("Name : ", userOneName);

// let fruits = ["Apple", "Banana", "Grapes", "Kiwi"];

// let [f1, , f3, f4] = fruits;

// console.log(f3); // Grapes

// NESTED DESTRUCTURING
let user = {
  name: "John Doe",
  age: 32,
  address: {
    street: "201 Main Road, Wakad",
    city: "Pune",
  },
  friends: ["Joe", "Chandler", "Rachel"],
};

let {
  name,
  age,
  address: { city, street },
  friends: [f1, f2, f3],
} = user;

console.log(city, f3, name);

let users = [
  { email: "john@test", age: 32 },
  { email: "jenny@test", age: 30 },
  { email: "jack@test", age: 34 },
];

let [{ email: e1, age: a1 }, { email: e2, age: a2 }, { email: e3, age: a3 }] =
  users;

console.log(e1, a2, e3);
