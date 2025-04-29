// JAVASCRIPT INSERTION METHODS

/*
  - createElement()
  - appendChild()
  - insertBefore()
  - innerHTML
  - textContent/innerText
  - insertAdjacentHTML
  - replaceChild()
  - cloneNode()
*/

// parentNode
const ul = document.getElementById("studentList");

// appendChild()

const li1 = document.createElement("li");
li1.textContent = "Pramod";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Raj";
ul.appendChild(li2);

// for (let i = 0; i < 5; i++) {
//   const name = prompt("Enter your name");
//   const li = document.createElement("li");
//   li.textContent = name;
//   ul.appendChild(li);
// }

// insertBefore(newNode, referenceNode)

const li3 = document.createElement("li");
li3.textContent = "Harish";

const name1 = document.getElementById("name1");

ul.insertBefore(li3, name1);

// innerHTML
const container = document.getElementsByClassName("container")[0];

// container.innerHTML = "<h1>Hello World</h1>";

// insertAdjacentHTML

/*
  - beforebegin
  - afterbegin
  - beforeend
  - afterend
*/

const li4 = document.createElement("li");
li4.textContent = "Arjun";
ul.insertAdjacentHTML("beforeend", "<li>Arjun</li>");
ul.insertAdjacentHTML("beforebegin", "<li>Bhima</li>");
ul.insertAdjacentHTML("afterend", "<li>Dhrishtant</li>");
ul.insertAdjacentHTML("afterbegin", "<li>Karna</li>");
