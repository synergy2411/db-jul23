// Objects

// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
//   email: "john@test.com",
// };

// console.log(user);

// Array

// let friends = ["Joe", "Monica", "Ross", "Rachel", "Chandler"];

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

// const position = friends.findIndex(function (value) {
//   return value.includes("s");
// });

// const splicedArray = friends.splice(position, 1);

// console.log(position);

// console.log(friends);
// console.log(splicedArray);

// FUNCTIONS
// function declaration

// console.log("Sum : ", add(2, 4));

// function add(n1, n2) {
//   return n1 + n2;
// }

// function expression

// const mul = function (n1, n2) {
//   return n1 * n2;
// };

// console.log("Multiply : ", mul(2, 3));

// Arrow Function

// const square = (n1) => {
//   return n1 * n1;
// };

// console.log("Square : ", square(3));

function mystry() {
  var chooseNumber = function () {
    return 7;
  };
  return chooseNumber;
  var chooseNumber = function () {
    return 12;
  };
}

const nestedFn = mystry();

console.log(nestedFn());
