/*
  Promise States
  - pending
  - fulfilled
  - rejected
  - settled
*/

// backend

// const myPromise = new Promise((resolve, reject) => {
//   if (sucess) {
//     resolve("Data Loaded Successfully");
//   } else {
//     reject("Data not loaded");
//   }
// });

const myPromise = new Promise((res, rej) => {
  const data = true;
  setTimeout(() => {
    if (data) {
      res("Data Loaded Successfully");
    } else {
      rej("Data not loaded");
    }
  }, 2000);
});

console.log(myPromise);

myPromise
  .then((data) => {
    console.log("Im 1st then executed successfully");
    return "Im passing to next then";
  })
  .then((data) => {
    console.log(data);
  })
  .then(() => {})
  .then(() => {})
  .then(() => {})
  .catch((err) => {
    console.log(myPromise);
    console.log(err);
  });
