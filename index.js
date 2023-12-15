let images = document.querySelectorAll(".photogallery-images li");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", function () {
  let lastImage = images[2].cloneNode(true);
  images[2].remove();
  document
    .querySelector(".photogallery-images")
    .insertBefore(lastImage, images[0]);
  images = document.querySelectorAll(".photogallery-images li");
});

prevButton.addEventListener("click", function () {
  let firstImage = images[0].cloneNode(true);
  images[0].remove();
  document.querySelector(".photogallery-images").appendChild(firstImage);
  images = document.querySelectorAll(".photogallery-images li");
});
