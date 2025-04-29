// MOUSE EVENTS
// KEYBOARD EVENTS
// FORM EVENTS
// DOCUMENT EVENTS

// const btn1 = document.getElementById("btn");
// // to capture and perform an action
// btn1.addEventListener("click", (event) => {
//   alert("Button clicked");
//   console.log(event);
// });

// // to capture and perform an action on the mouseover event
// btn1.addEventListener("mouseover", () => {
//   alert("Mouse over");
// });

// // to capture and perform an action on the mouseout event
// btn1.addEventListener("mouseout", () => {
//   alert("Mouse out");
// });

// // to capture and perform an action on the mousemove event
// btn1.addEventListener("mousemove", () => {
//   alert("Mouse move");
// });

// // to capture and perform an action on the mouseenter event/ to capture and perform an action on the mouseenter event
// btn1.addEventListener("mouseenter", () => {
//   alert("Mouse enter");
// });

// const nameInput1 = document.getElementById("nameInput");

// nameInput1.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// const submitBtn = document.getElementById("submitBtn");

const loginBtn1 = document.getElementById("loginForm");

loginBtn1.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted");
});

loginBtn1.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log({ email, password });
});

const dropDown = document.getElementById("dropDown");

dropDown.addEventListener("change", (e) => {
  const option = e.target.value;
  if (option === "red") {
    document.body.style.backgroundColor = "red";
  } else if (option === "blue") {
    document.body.style.backgroundColor = "blue";
  }
});
