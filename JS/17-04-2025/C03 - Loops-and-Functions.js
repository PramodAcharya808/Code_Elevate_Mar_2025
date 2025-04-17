// loops

/* 
  - for loop -> loop a block of code 'N' of times
  - for in loop -> loop through the keys of an object
  - for of loop -> loop through the values of an object
  - while loop -> loop ablock based on specific conditions
  - do-while loop -> loop which runs atleast once
*/

// FOR
// Syntax: for(statment 1; statment 2; statment 3;){code block}

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// FOR IN
// syntax: for(key in object)

const items = {
  Name: "LED bulb",
  Price: 150,
  Offer: "5%",
};

// for (let k in items) {
//   console.log("Keys in Items: ", k);
// }

// FOR OF
// syntax: for(variable of iterable)

const numbers = [1, 2, 3, 4, 5, "Pramod"];

// for (let v of numbers) {
//   console.log(v);
// }

// WHILE LOOP

let age = 5;

// while (age < 10 && age != 0) {
//   console.log("Your are elder");
//   age--;
// }

// DO-while
var marks = 5;

// do {
//   console.log("Marks");
//   marks--;
// } while (marks < 10 && marks != 0);

// FUNCTIONS in JAVASCRIPT

function sum(a, b) {
  console.log("Sum: ", a + b);
}

sum(12, 10);

// ARROW FUNCTION
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
