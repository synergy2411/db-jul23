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
// function declaration - can be hoisted

// console.log("Sum : ", add(2, 4));

// function add(n1, n2) {
//   return n1 + n2;
// }

// function expression - can't be hoisted

// const mul = function (n1, n2) {
//   return n1 * n2;
// };

// console.log("Multiply : ", mul(2, 3));

// Arrow Function

// const square = (n1) => {
//   return n1 * n1;
// };

// console.log("Square : ", square(3));

// function mystry() {
//   var chooseNumber = function () {
//     return 7;
//   };
//   return chooseNumber;
//   var chooseNumber = function () {
//     return 12;
//   };
// }

// const nestedFn = mystry();

// console.log(nestedFn());

// Closure : process of binding the outer scope variable to the nested function

// function mystry() {
//   let x = 101;
//   return function () {
//     return ++x;
//   };
// }

// const nestedFn = mystry();

// console.log(nestedFn()); // 102
// console.log(nestedFn()); // 103
// console.log(nestedFn()); // 104

function buildTicket(transport) {
  let numOfPassengers = 0;

  return function (name) {
    return (
      "Hello Mr/s. " +
      name +
      "!\n" +
      "You are going via " +
      transport +
      ".\n" +
      "Your ticket ID is : " +
      ++numOfPassengers
    );
  };
}

let shipFn = buildTicket("Ship");

console.log(shipFn("John"));
console.log(shipFn("Jenny"));

const carFn = buildTicket("Car");

console.log(carFn("Jack")); // ?
