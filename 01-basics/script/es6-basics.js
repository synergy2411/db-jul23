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
// let user = {
//   name: "John Doe",
//   age: 32,
//   address: {
//     street: "201 Main Road, Wakad",
//     city: "Pune",
//   },
//   friends: ["Joe", "Chandler", "Rachel"],
// };

// let {
//   name,
//   age,
//   address: { city, street },
//   friends: [f1, f2, f3],
// } = user;

// console.log(city, f3, name);

// let users = [
//   { email: "john@test", age: 32 },
//   { email: "jenny@test", age: 30 },
//   { email: "jack@test", age: 34 },
// ];

// let [{ email: e1, age: a1 }, { email: e2, age: a2 }, { email: e3, age: a3 }] =
//   users;

// console.log(e1, a2, e3);

// REST / SPREAD (...)
// - Rest create the collection from individual elements
// - Supplied as last arguments in function declaration

// function demo(userOneEmail, ...args) {
//   console.log(args[0]);
// }

// demo("test@test.com");
// demo("test@test.com", "john@test");
// demo("test@test.com", "john@test", "jenny@test");

// - Spread expands the collection into individual elements

// let numbers = [3, 4, 5];

// let moreNumbers = [1, 2, ...numbers, 6, 7, 8];

// console.log(moreNumbers);

// let userOne = {
//   name: "John",
//   isAdmin: true,
//   company: "DB",
// };

// let userTwo = {
//   ...userOne,
//   name: "Jeeny",
// };

// console.log(userTwo);

// Template Literals - ` BACK TICK `
// - Embed the variables into string without ( + )
// - Multi-line string without (\n)

// let username = "Jenny Doe";
// let userAge = 32;

// let greet = `
// Hello from ${username}!!

// I'm ${userAge} years old..

// `;

// console.log(greet);

// BLOCK SCOPE : restrict the scope of avriable to the nearest block
//  - let
//  - const

// function demo(arr) {
//   if (arr.length > 2) {
//     const LOAD = "LOADING IMAGES...";
//     console.log(FLASH); // ?
//   } else {
//     const FLASH = "FLASHING IMAGES...";
//   }
// }

// demo([1, 2, 3, 4]);

// const username = "John Doe";     // PRIMITIVE

// username = "Jenny Doe";

// console.log(username);

// const user = {
//   // REFERENCE
//   name: "John Doe",
// };

// // user = {
// //   // Can't be done
// //   name: "Jack",
// // };

// user.name = "Jenny Doe";

// console.log(user);

// let fruits = ["apple", "guava", "oranges"];

// fruits.push("kiwi");

// console.log(fruits);

// fruits = ["apple", "guava", "kiwi"];

// console.log(fruits);

// Dynamic Type Casting in JavaScript

// let anyVar = "Hello World";

// console.log(typeof anyVar);

// anyVar = 231;

// console.log(typeof anyVar);

// anyVar = true;

// console.log(typeof anyVar);

// Map - to store key/value pair
// - key should not necesarilly be a string

let map = new Map();

map.set("name", "John");

map.set(true, 1);

map.set(201, "UID");

console.log(map.size);

// console.log(map.get("name"));

for (let value of map.values()) {
  console.log(value);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let [key, value] of map.entries()) {
  console.log(`${key} -> ${value}`);
}

// Set - stores uniques values only

// let set = new Set();

// set.add("John");
// set.add("Jenny");
// set.add("Jack");
// set.add("Jill");
// set.add("Jack");

// console.log(set.size);
