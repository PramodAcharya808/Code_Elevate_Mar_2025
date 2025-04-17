let a = 1;
let b = 2;
let c = 3;
let d = 4;

const sum = a - (b % c) * d;

console.log(sum);

// Operators
/*
  - Arithmetic Operators 
  + - * ** / % ++ --

  - Assignment Operators
  = += -= *= /= %= **=

  - Comparistion Oprs
  == != === !== > < >= <= ?

  - Logical Ops
  && || !
*/

// CONDITONAL STATEMENTS
/*
  - if 
  - if... else
  - if... elseif... else
*/
const age = 14;

if (age >= 18) {
  console.log("Your are major");
} else if (age >= 15 && age <= 18) {
  console.log("Grow little more");
} else {
  console.log("Your are minor");
}

// Ternary Operator
// Syntax
// condition ? exp1 : exp2

let marks = 65;

marks >= 75 ? console.log("PASS") : console.log("FAIL");

// SWITCH (HW)
