// className and classList

// className
// const box = document.getElementById("box");
// const color = prompt("Enter the color");
// box.className = color;

// classList
/*
  - add
  - remove
  - toggle
  - containes
  - replace
*/

const item = document.getElementById("item");
// item.classList.remove("red");
// item.classList.add("blue");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  item.classList.toggle("red");
});

const menu = document.getElementById("menu");

if (menu.classList.contains("open")) {
  console.log("Menu is Open");
} else {
  console.log("Menu is Closed");
}

// replace()
menu.classList.replace("open", "close");
