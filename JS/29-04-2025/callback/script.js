function loadImage(url, callback) {
  const img = document.getElementById("imgHolder");

  img.onclick = function () {
    callback();
    img.src = url;
  };
}

loadImage("https://picsum.photos/200/300", function () {
  console.log("Image loaded");
});
