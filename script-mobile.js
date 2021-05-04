const prev = document.querySelectorAll(".slider-button__image")[2];
const next = document.querySelectorAll(".slider-button__image")[3];
const testWoman = document.querySelectorAll(".testimonial--woman")[1];
const testMan = document.querySelectorAll(".testimonial--man")[1];
const imageWoman = document.querySelectorAll(".testimonial-image")[2];
const imageMan = document.querySelectorAll(".testimonial-image")[3];

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
