const prevMobile = document.querySelectorAll(".slider-button__image")[0];
const nextMobile = document.querySelectorAll(".slider-button__image")[1];
const testWomanMobile = document.querySelector(".testimonial--woman");
const testManMobile = document.querySelector(".testimonial--man");
const imageWomanMobile = document.querySelectorAll(".testimonial-image")[0];
const imageManMobile = document.querySelectorAll(".testimonial-image")[1];

prevMobile.addEventListener("click", () => {
  testWomanMobile.style.display = "block";
  imageWomanMobile.style.display = "block";
  testManMobile.style.display = "none";
  imageManMobile.style.display = "none";
});

nextMobile.addEventListener("click", () => {
  testManMobile.style.display = "block";
  imageManMobile.style.display = "block";
  testWomanMobile.style.display = "none";
  imageWomanMobile.style.display = "none";
});
