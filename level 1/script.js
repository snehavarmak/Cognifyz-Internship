// Apply Button
document.getElementById("applyBtn").addEventListener("click", () => {
  alert("Redirecting to Cognifyz Internship Application Form!");
});

// Change Page Color
document.getElementById("colorChangeBtn").addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Greet User
document.getElementById("greetBtn").addEventListener("click", () => {
  const hour = new Date().getHours();
  let greeting = hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";
  alert(greeting);
});

// Calculator
document.getElementById("addBtn").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 + num2;
  document.getElementById("result").textContent = isNaN(result)
    ? "Please enter valid numbers!"
    : `Result: ${result}`;
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Cognifyz! We'll get back to you soon.");
  e.target.reset();
});
// ==========================
// IMAGE GALLERY ENLARGE FUNCTION
// ==========================
const images = document.querySelectorAll(".gallery-grid img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.onclick = () => {
  modal.style.display = "none";
};

// ==========================
// SLIDESHOW AUTO TRANSITION
// ==========================
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide) => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();
