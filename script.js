const prev = document.querySelectorAll(".slider-button__image")[0];
const next = document.querySelectorAll(".slider-button__image")[1];
const testWoman = document.querySelector(".testimonial--woman");
const testMan = document.querySelector(".testimonial--man");
const imageWoman = document.querySelectorAll(".testimonial-image")[0];
const imageMan = document.querySelectorAll(".testimonial-image")[1];

prev.addEventListener("click", () => {
  testWoman.style.display = "block";
  imageWoman.style.display = "block";
  testMan.style.display = "none";
  imageMan.style.display = "none";
});

next.addEventListener("click", () => {
  testMan.style.display = "block";
  imageMan.style.display = "block";
  testWoman.style.display = "none";
  imageWoman.style.display = "none";
});
