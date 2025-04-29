function pageLoaded() {
  console.log("Page loaded successfully");
}

const userNameInput = document.getElementById("userName");
const userNameDisplay = document.getElementById("userNameDisplay");
const userNameArr = [];
userNameInput.addEventListener("input", (e) => {
  userNameArr.push(e.target.value);
});

function handleOnClick() {
  alert(userNameArr);
}

function handleOnDoubleClick() {
  alert("Double Clicked");
}
