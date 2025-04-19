// let names = "Pramod";
// let age = 26;

// Template Literals ` backtick

// console.log("My name is " + names + ". My age is " + age);

// console.log(`My name is ${names}. My age is ${age}`);

// console.log(`The name is "Pramod".`);

// Escape Sequence characters

// let city = "Bangalore R' City";

// console.log(city);

/*
  \n ->NewLine
  \t -> tab
  \r -> carriage return
*/

// console.log("My name is Balaji.\tIm a student");

// String Properties and Methods

let name = "     Pramod Acharya      ";
let name2 = " is a Good boy.";
// 1
console.log(`Length of the string is ${name.length}`);

// 2
console.log(`Before: ${name}. After: ${name.toUpperCase()}`);

// 3
console.log(`Before: ${name}. After: ${name.toLowerCase()}`);

// 4
console.log(name.slice(1, 4));

// 5
console.log(name.replace("Acharya", "Sir"));

// 6
console.log(name.concat(name2, "CE"));

// 7
console.log(name.trim());

let company = "Code Elevate";

console.log("Altered String: " + company.toUpperCase());
console.log("Original String: " + company);

console.log(company[2]);
