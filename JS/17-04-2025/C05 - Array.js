const arr1 = ["Pramod", 25, { item: "Bulb" }];

console.log(arr1);

arr1[1] = 26;

// console.log(typeof arr1);

// Array Methods

let arr2 = ["Banana", "Apple", "Orrange", "Watermelon"];

// 1
console.log(arr2.toString());

// 2
let arr3 = ["pramod", "acharya"];
console.log(arr3.join("_"));

// 3
arr2.pop();
console.log(arr2);

// 4
arr2.push("muskmelon");
console.log(arr2);

// 5
arr2.shift();
console.log(arr2);

// 6
arr2.unshift("Banana");
console.log(arr2);

/*
 More Array methods
 - delete
 - concat
 - sort
 - splice
 - slice
 - reverse
 - forEach loop
*/

// 7 ************* MAP, FILTER & REDUCE
let values = [1, 3, 5, 7, 9];

const res = values.map((nums) => {
  return nums + 1;
});

console.log(res);
