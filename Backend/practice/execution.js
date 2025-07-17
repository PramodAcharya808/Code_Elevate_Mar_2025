// Synchronous

// console.log(3);
// console.log(1);
// console.log(2);

// Asynchronous

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");

// Call backs

function greet(name, callback) {
  console.log("hi ", name);
  callback();
}

function sayBye() {
  console.log("Bye");
}

greet("Pramod", sayBye);
