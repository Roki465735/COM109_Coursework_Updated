// Student slider functionality
const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".slider-dot");
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".student-card").length;

// Function to go to a specific slide
function goToSlide(index) {
  currentSlide = index;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

// Add click event to dots
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goToSlide(parseInt(dot.getAttribute("data-index")));
  });
});

// Auto slide change (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}, 5000);
