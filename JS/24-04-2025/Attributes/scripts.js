// ATTRIBUTES IN JS

/* 
  1. setAttribute()
  2. getAttribute()
  3. removeAttribute()
  4. hasAttribute()
  5. attributes
  6. dataset
*/

// setAttribute()
const loginBtn = document.querySelector(".login-btn");

loginBtn.setAttribute("class", "login-btn-2");

const loginBody = document.body;

loginBody.setAttribute("id", "login-body");

// getAttribute()
const loginBtn2 = document.querySelector(".login-btn-2");
console.log(loginBtn2.getAttribute("class"));
console.log(loginBtn2.getAttribute("id"));

// removeAttribute()
const userName = document.getElementsByName("username");
userName[0].removeAttribute("disabled");

// hasAttribute()
const res = userName[0].hasAttribute("disabled");
console.log(res);

// attributes
const userName2 = document.getElementsByName("username");
console.log(userName[0].attributes);

// dataset
const userName3 = document.getElementsByName("username");
console.log(userName3[0].dataset);
