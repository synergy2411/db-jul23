// Objects

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   email: "john@test.com",
// };

// console.log(user);

// Array

let friends = ["Joe", "Monica", "Ross", "Rachel", "Chandler"];

// friends.push("Green");
// friends.pop();

// friends.unshift("Alice");
// friends.shift();

// const mappedArray = friends.map(function (value) {
//   return value;
// });
// const filteredArray = friends.filter(function (value) {
//   return value.includes("a");
// });

const position = friends.findIndex(function (value) {
  return value.includes("s");
});

const splicedArray = friends.splice(position, 1);

console.log(position);

console.log(friends);
// console.log(splicedArray);
