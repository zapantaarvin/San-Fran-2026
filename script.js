const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const dots = Array.from(document.querySelectorAll(".dot"));
const arrows = Array.from(document.querySelectorAll(".arrow-button"));

let activeIndex = 0;

function renderCarousel(index) {
  activeIndex = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${activeIndex * 100}%)`;

  tabButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === activeIndex;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeIndex);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderCarousel(Number(button.dataset.slide));
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    renderCarousel(Number(dot.dataset.slide));
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    renderCarousel(activeIndex + Number(arrow.dataset.direction));
  });
});

renderCarousel(0);
