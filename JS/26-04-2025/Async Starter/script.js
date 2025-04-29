// setTimeout(classBack, time in MS)

// setTimeout(() => {
//   console.log("Hello 1");
// }, 4000);

// const timerId2 = setTimeout(() => {
//   console.log("Hello 2");
// }, 3000);

// setTimeout(() => {
//   console.log("Hello 3");
// }, 2000);

// console.log("No timer");

// clearTimeout(timerId2);

// setInterval(classBack, time in MS)

const timerId2 = setInterval(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  clearInterval(timerId2);
}, 5000);
