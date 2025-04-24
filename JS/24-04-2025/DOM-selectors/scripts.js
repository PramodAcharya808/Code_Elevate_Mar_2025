// SEARCHING OF DOM

/*
 1. getElementById
 2. querySelector
 3. querySelectorAll
 4. getElementsByTagName
 5. getElementsByClassName
 6. getElementsByName
*/

// getElementById

const title1 = document.getElementById("title");

title.style.color = "red";

// querySelector

const title2 = document.querySelector(".note");

title2.style.color = "blue";
title2.style.fontWeight = "600";

// querySelectorAll

const allNotes = document.querySelectorAll(".note");

allNotes.forEach((note) => {
  note.style.color = "green";
});

allNotes[0].style.fontSize = "20px";

// getElementsByTagName

const allP = document.getElementsByTagName("p");

allP[0].style.background = "yellow";
allP[1].style.background = "red";
allP[2].style.background = "green";
allP[3].style.background = "blue";

// getElementsByClassName

const allDivs = document.getElementsByClassName("aboutMe");

allDivs[0].style.background = "teal";

// getElementsByName

const emailInput = document.getElementsByName("email");
emailInput[0].style.border = "2px solid red";
emailInput[0].style.padding = "10px";
emailInput[0].style.borderRadius = "5px";
emailInput[0].style.width = "200px";
emailInput[0].style.height = "20px";
emailInput[0].style.fontSize = "16px";
emailInput[0].value = "pramod@gmail.com";

// innerHTML

// const footer = document.getElementById("footer");

// footer.innerHTML = "<h1>This is a footer</h1>";

// innerText

const footer = document.getElementById("footer");

footer.innerText = "© 2025 My Website. All rights reserved.";
