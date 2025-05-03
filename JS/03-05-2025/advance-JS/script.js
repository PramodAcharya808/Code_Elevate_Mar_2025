// IIFE (Immediately Invoked Function Expression)
// Array destructuring
// Object destructuring
// Spread operator
// Rest operator
// Hoisting
//.json file export and import
// local storage

// 1. IIFE (Immediately Invoked Function Expression)

// (function connectDB() {
//   console.log("Connecting to DB");
//   // logic to connect to DB
// })();

// 2. Array destructuring

// const numbers = [1, 2, 3, 4, 5];

// const [a1, a2, a3, a4, a5] = numbers;

// console.log(a1);

// 3. Object destructuring

// const user = {
//   name: "John",
//   age: 20,
//   city: "New York",
// };

// const { name, age } = user;

// console.log(name, age);

// 4. Spread operator in Array

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [6, 7, 8, 9, 10];

// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbers3 = [...numbers1, ...numbers2];

// console.log(numbers3);

// 5. Spread operator in Object

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = { ...obj1, c: 3 };

// console.log(obj2);

// 6. Rest operator

// const numbers = [1, 2, 3, 4, 5];

// const [a1, a2, ...rest] = numbers;

// console.log(a1, a2, rest);

// 7. Hoisting

// var userName;
// userName = "John";

// console.log(userName);

// 8. .json file export and import
// import userData from "./userData.json";
// const userData = require("./userData.json");

// console.log(userData.quizzes);

// 9. local storage

localStorage.setItem("userName", "Pramod Acharya");
