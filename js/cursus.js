const slides = document.querySelectorAll(".cursus-slide");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

leftBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

rightBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});
